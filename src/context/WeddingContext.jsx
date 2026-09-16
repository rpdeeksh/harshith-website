import React, { createContext, useContext, useState, useEffect } from "react";
import {
  WEDDING_DETAILS,
  THEMES_DATA,
  INITIAL_EVENTS,
  INITIAL_GAME_ROUNDS,
  INITIAL_PLAYERS,
  INITIAL_INVITEES,
  INITIAL_FINANCES,
  INITIAL_USERS,
  INITIAL_PHOTOS,
  INITIAL_RSVPS
} from "../data/mockData";
import { broadcastEvent, subscribeToSyncEvents } from "../services/firebase";

const WeddingContext = createContext(null);

export const WeddingProvider = ({ children }) => {
  const [weddingDetails, setWeddingDetails] = useState(() => {
    const saved = localStorage.getItem("wedding_details_v3");
    if (!saved) return WEDDING_DETAILS;
    try {
      return { ...WEDDING_DETAILS, ...JSON.parse(saved) };
    } catch {
      return WEDDING_DETAILS;
    }
  });

  // Active theme: "coastal" (Ocean Blue / GSB) or "forest" (Forest Green / Dandeli)
  const [activeTheme, setActiveTheme] = useState(() => {
    const saved = localStorage.getItem("wedding_active_theme");
    return saved || "coastal";
  });

  // Current logged in user: null means needs login
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("wedding_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  // Registered guest profile for games/passes
  const [registeredUser, setRegisteredUser] = useState(() => {
    const saved = localStorage.getItem("wedding_registered_user");
    return saved ? JSON.parse(saved) : null;
  });

  // Players list for interactive games
  const [players, setPlayers] = useState(() => {
    const saved = localStorage.getItem("wedding_players");
    return saved ? JSON.parse(saved) : INITIAL_PLAYERS;
  });

  // Game rounds and interactive challenges with QR code
  const [gameRounds, setGameRounds] = useState(() => {
    const saved = localStorage.getItem("wedding_game_rounds");
    return saved ? JSON.parse(saved) : INITIAL_GAME_ROUNDS;
  });

  // Team bonuses (Groom / Coastal vs Bride / Forest)
  const [teamBonuses, setTeamBonuses] = useState(() => {
    const saved = localStorage.getItem("wedding_team_bonuses");
    return saved ? JSON.parse(saved) : { groom: 50, bride: 40 };
  });

  // Ceremonies and events
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("wedding_events");
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  // Guest invitees list
  const [invitees, setInvitees] = useState(() => {
    const saved = localStorage.getItem("wedding_invitees");
    return saved ? JSON.parse(saved) : INITIAL_INVITEES;
  });

  // Marriage finances & quotations
  const [finances, setFinances] = useState(() => {
    const saved = localStorage.getItem("wedding_finances");
    return saved ? JSON.parse(saved) : INITIAL_FINANCES;
  });

  // User master credentials
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("wedding_users");
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  // RSVPs
  const [rsvps, setRsvps] = useState(() => {
    const saved = localStorage.getItem("wedding_rsvps");
    return saved ? JSON.parse(saved) : INITIAL_RSVPS;
  });

  // Photos
  const [photos, setPhotos] = useState(() => {
    const saved = localStorage.getItem("wedding_photos");
    return saved ? JSON.parse(saved) : INITIAL_PHOTOS;
  });

  // Navigation & View Mode
  const [viewMode, setViewMode] = useState(() => {
    const savedUser = localStorage.getItem("wedding_current_user");
    if (savedUser) {
      try {
        const u = JSON.parse(savedUser);
        return u.role === "admin" ? "admin" : "guest";
      } catch (e) {
        return "guest";
      }
    }
    return "guest";
  });

  const [adminTab, setAdminTab] = useState("overview");
  const [activeMobileTab, setActiveMobileTab] = useState("home");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem("wedding_details_v3", JSON.stringify(weddingDetails));
  }, [weddingDetails]);

  useEffect(() => {
    localStorage.setItem("wedding_active_theme", activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("wedding_current_user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("wedding_current_user");
    }
  }, [currentUser]);

  useEffect(() => {
    if (registeredUser) {
      localStorage.setItem("wedding_registered_user", JSON.stringify(registeredUser));
    } else {
      localStorage.removeItem("wedding_registered_user");
    }
  }, [registeredUser]);

  useEffect(() => {
    localStorage.setItem("wedding_players", JSON.stringify(players));
    broadcastEvent("PLAYERS_UPDATED", players);
  }, [players]);

  useEffect(() => {
    localStorage.setItem("wedding_game_rounds", JSON.stringify(gameRounds));
    broadcastEvent("ROUNDS_UPDATED", gameRounds);
  }, [gameRounds]);

  useEffect(() => {
    localStorage.setItem("wedding_team_bonuses", JSON.stringify(teamBonuses));
    broadcastEvent("BONUSES_UPDATED", teamBonuses);
  }, [teamBonuses]);

  useEffect(() => {
    localStorage.setItem("wedding_events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("wedding_invitees", JSON.stringify(invitees));
  }, [invitees]);

  useEffect(() => {
    localStorage.setItem("wedding_finances", JSON.stringify(finances));
  }, [finances]);

  useEffect(() => {
    localStorage.setItem("wedding_users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("wedding_rsvps", JSON.stringify(rsvps));
  }, [rsvps]);

  useEffect(() => {
    localStorage.setItem("wedding_photos", JSON.stringify(photos));
  }, [photos]);

  // Listen to cross-tab live sync events
  useEffect(() => {
    const unsubscribe = subscribeToSyncEvents((event) => {
      if (event.type === "PLAYERS_UPDATED" && Array.isArray(event.payload)) {
        setPlayers(event.payload);
      }
      if (event.type === "ROUNDS_UPDATED" && Array.isArray(event.payload)) {
        setGameRounds(event.payload);
      }
      if (event.type === "BONUSES_UPDATED" && event.payload) {
        setTeamBonuses(event.payload);
      }
    });
    return unsubscribe;
  }, []);

  // Compute live team scores
  const bridePlayerScore = players
    .filter((p) => p.side === "bride")
    .reduce((acc, curr) => acc + (Number(curr.score) || 0), 0);
  const groomPlayerScore = players
    .filter((p) => p.side === "groom")
    .reduce((acc, curr) => acc + (Number(curr.score) || 0), 0);

  const totalTeamBrideScore = bridePlayerScore + (teamBonuses.bride || 0);
  const totalTeamGroomScore = groomPlayerScore + (teamBonuses.groom || 0);

  // Switch Theme
  const switchTheme = (themeName) => {
    setActiveTheme(themeName);
  };

  // Login handler
  const login = (username, password) => {
    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    const matched = users.find(
      (u) => u.username.toLowerCase() === cleanUser && u.password === cleanPass
    );

    if (matched) {
      setCurrentUser(matched);
      if (matched.role === "admin") {
        setViewMode("admin");
      } else {
        setViewMode("guest");
        // Set guest theme preference based on side
        if (matched.side === "groom") {
          setActiveTheme("coastal");
        } else if (matched.side === "bride") {
          setActiveTheme("forest");
        }
        // Also register player if not registered
        if (!registeredUser) {
          setRegisteredUser({
            id: matched.id,
            name: matched.name,
            side: matched.side === "both" ? "groom" : matched.side,
            team: matched.side === "bride" ? "Team Forest (Bride)" : "Team Coastal (Groom)",
            score: 50,
            city: "Karnataka"
          });
        }
      }
      return { success: true, user: matched };
    }
    return { success: false, message: "Invalid username or password. Please verify credentials." };
  };

  const logout = () => {
    setCurrentUser(null);
    setViewMode("guest");
    localStorage.removeItem("wedding_current_user");
  };

  // Register Guest in Game
  const registerGuest = (name, side, city = "Kundapura") => {
    const prefix = side === "bride" ? "B" : "G";
    const existingSameSide = players.filter((p) => p.side === side);
    
    let maxNum = 0;
    existingSameSide.forEach((p) => {
      if (p.id.startsWith(prefix)) {
        const num = parseInt(p.id.replace(prefix, ""), 10);
        if (!isNaN(num) && num > maxNum) maxNum = num;
      }
    });

    const newId = `${prefix}${maxNum + 1}`;
    const newPlayer = {
      id: newId,
      name: name.trim(),
      side,
      team: side === "bride" ? "Team Forest (Bride)" : "Team Coastal (Groom)",
      score: 0,
      city: city.trim() || (side === "bride" ? "Dandeli" : "Kundapura"),
      registeredAt: new Date().toISOString()
    };

    setPlayers((prev) => [newPlayer, ...prev]);
    setRegisteredUser(newPlayer);
    setActiveTheme(side === "bride" ? "forest" : "coastal");
    return newPlayer;
  };

  // Award Points
  const awardPlayerPoints = (playerId, points, reason = "Game Achievement") => {
    const pts = Number(points);
    setPlayers((prev) =>
      prev.map((p) => {
        if (p.id === playerId) {
          const updatedScore = (p.score || 0) + pts;
          if (registeredUser && registeredUser.id === playerId) {
            setRegisteredUser({ ...registeredUser, score: updatedScore });
          }
          return { ...p, score: updatedScore };
        }
        return p;
      })
    );
  };

  const awardTeamPoints = (side, points, reason = "Team Victory") => {
    const pts = Number(points);
    setTeamBonuses((prev) => ({
      ...prev,
      [side]: (prev[side] || 0) + pts
    }));
  };

  // Invitee actions (tick / checkbox when invited)
  const toggleInvited = (id) => {
    setInvitees((prev) =>
      prev.map((inv) =>
        inv.id === id
          ? {
              ...inv,
              isInvited: !inv.isInvited,
              invitedAt: !inv.isInvited ? new Date().toISOString() : null
            }
          : inv
      )
    );
  };

  const addInvitee = (newInv) => {
    const item = {
      id: "inv-" + Date.now(),
      name: newInv.name,
      phone: (newInv.phone || "").replace(/[^0-9]/g, ""),
      category: newInv.category || "Friends",
      side: newInv.side || "Both Sides",
      guestsCount: Number(newInv.guestsCount) || 1,
      isInvited: !!newInv.isInvited,
      city: newInv.city || "Kundapura",
      accommodation: newInv.accommodation || "Not Required",
      rsvpStatus: "Pending",
      invitedAt: newInv.isInvited ? new Date().toISOString() : null
    };
    setInvitees((prev) => [item, ...prev]);
    return item;
  };

  const bulkAddInvitees = (newList) => {
    const formatted = newList.map((item, idx) => ({
      id: "inv-" + (Date.now() + idx),
      name: item.name.trim(),
      phone: (item.phone || "").replace(/[^0-9]/g, ""),
      category: item.category || "Guest",
      side: item.side || "Both Sides",
      guestsCount: Number(item.guestsCount) || 2,
      isInvited: !!item.isInvited,
      city: item.city || "Kundapura",
      accommodation: item.accommodation || "Not Required",
      rsvpStatus: "Pending",
      invitedAt: item.isInvited ? new Date().toISOString() : null
    }));
    setInvitees((prev) => [...formatted, ...prev]);
  };

  const deleteInvitee = (id) => {
    setInvitees((prev) => prev.filter((inv) => inv.id !== id));
  };

  // Marriage Finance Tracker actions (Agreed Amount vs Paid Amount)
  const addExpense = (newExpense) => {
    const agreed = Number(newExpense.agreedAmount) || 0;
    const paid = Number(newExpense.paidAmount) || 0;
    const item = {
      id: "fin-" + Date.now(),
      vendorName: newExpense.vendorName,
      serviceCategory: newExpense.serviceCategory || "General",
      agreedAmount: agreed,
      paidAmount: paid,
      paymentMethod: newExpense.paymentMethod || "UPI (Google Pay)",
      lastPaymentDate: newExpense.lastPaymentDate || new Date().toISOString().split("T")[0],
      status: paid >= agreed ? "Paid in Full" : paid > 0 ? "Partially Paid" : "Unpaid",
      phone: newExpense.phone || "",
      notes: newExpense.notes || ""
    };
    setFinances((prev) => [item, ...prev]);
    return item;
  };

  const updateExpense = (id, updatedFields) => {
    setFinances((prev) =>
      prev.map((exp) => {
        if (exp.id === id) {
          const agreed = updatedFields.agreedAmount !== undefined ? Number(updatedFields.agreedAmount) : exp.agreedAmount;
          const paid = updatedFields.paidAmount !== undefined ? Number(updatedFields.paidAmount) : exp.paidAmount;
          return {
            ...exp,
            ...updatedFields,
            agreedAmount: agreed,
            paidAmount: paid,
            status: paid >= agreed ? "Paid in Full" : paid > 0 ? "Partially Paid" : "Unpaid"
          };
        }
        return exp;
      })
    );
  };

  const deleteExpense = (id) => {
    setFinances((prev) => prev.filter((exp) => exp.id !== id));
  };

  // User Master actions
  const addUser = (newUser) => {
    const item = {
      id: "usr-" + Date.now(),
      username: newUser.username.trim().toLowerCase(),
      password: newUser.password.trim(),
      name: newUser.name.trim(),
      role: newUser.role || "user",
      side: newUser.side || "both",
      phone: newUser.phone || "",
      avatar: newUser.role === "admin" ? "👑" : newUser.side === "bride" ? "🌿" : "🌊",
      assignedRoom: newUser.assignedRoom || "Standard"
    };
    setUsers((prev) => [item, ...prev]);
    return item;
  };

  const updateUser = (id, updatedFields) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updatedFields } : u))
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // Auto generate user credentials for invitees who don't have accounts
  const autoGenerateUsersFromInvitees = () => {
    const newAccounts = [];
    invitees.forEach((inv) => {
      const cleanName = inv.name.toLowerCase().replace(/[^a-z0-9]/g, "");
      const username = `guest_${cleanName.slice(0, 10)}_${inv.id.slice(-3)}`;
      const password = `vivah${Math.floor(100 + Math.random() * 900)}`;

      const exists = users.some((u) => u.phone === inv.phone || u.name === inv.name);
      if (!exists) {
        newAccounts.push({
          id: "usr-" + Date.now() + Math.floor(Math.random() * 1000),
          username,
          password,
          name: inv.name,
          role: "user",
          side: inv.side.toLowerCase().includes("bride") ? "bride" : inv.side.toLowerCase().includes("groom") ? "groom" : "both",
          phone: inv.phone,
          avatar: inv.side.toLowerCase().includes("bride") ? "🌿" : "🌊",
          assignedRoom: inv.accommodation || "To be allocated"
        });
      }
    });

    if (newAccounts.length > 0) {
      setUsers((prev) => [...newAccounts, ...prev]);
    }
    return newAccounts.length;
  };

  // Game & Interactive Challenge actions
  const addGameRound = (newRound) => {
    const item = {
      id: "gm-" + Date.now(),
      title: newRound.title,
      category: newRound.category || "Interactive Challenge",
      desc: newRound.desc || "",
      pointsPerWin: Number(newRound.pointsPerWin) || 20,
      status: newRound.status || "Upcoming",
      winnerSide: null,
      qrCodeData: `https://harshithwedsnidhi.com/games/gm-${Date.now()}`
    };
    setGameRounds((prev) => [...prev, item]);
    return item;
  };

  const updateGameRound = (id, updatedFields) => {
    setGameRounds((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...updatedFields } : g))
    );
  };

  const deleteGameRound = (id) => {
    setGameRounds((prev) => prev.filter((g) => g.id !== id));
  };

  // Event details update action
  const updateEvent = (id, updatedFields) => {
    setEvents((prev) =>
      prev.map((evt) => (evt.id === id ? { ...evt, ...updatedFields } : evt))
    );
  };

  // RSVP submission
  const submitRsvp = (rsvpData) => {
    const item = {
      id: "rsvp-" + Date.now(),
      name: rsvpData.name,
      phone: rsvpData.phone,
      side: rsvpData.side || "Both Sides",
      guestsCount: Number(rsvpData.guestsCount) || 1,
      events: rsvpData.events || ["evt-muhurtham"],
      dietary: rsvpData.dietary || "Traditional GSB Vegetarian Feast",
      accommodation: rsvpData.accommodation || "Not Required",
      submittedAt: new Date().toISOString()
    };
    setRsvps((prev) => [item, ...prev]);

    // Update invitee if found by phone or name
    setInvitees((prev) =>
      prev.map((inv) => {
        if (
          inv.phone === rsvpData.phone.replace(/[^0-9]/g, "") ||
          inv.name.toLowerCase() === rsvpData.name.toLowerCase()
        ) {
          return {
            ...inv,
            rsvpStatus: "Confirmed",
            guestsCount: Number(rsvpData.guestsCount) || inv.guestsCount,
            accommodation: rsvpData.accommodation || inv.accommodation
          };
        }
        return inv;
      })
    );

    return item;
  };

  return (
    <WeddingContext.Provider
      value={{
        weddingDetails,
        setWeddingDetails,
        activeTheme,
        switchTheme,
        themeData: THEMES_DATA[activeTheme] || THEMES_DATA.coastal,
        currentUser,
        login,
        logout,
        registeredUser,
        setRegisteredUser,
        registerGuest,
        players,
        gameRounds,
        teamBonuses,
        totalTeamBrideScore,
        totalTeamGroomScore,
        awardPlayerPoints,
        awardTeamPoints,
        events,
        updateEvent,
        invitees,
        toggleInvited,
        addInvitee,
        bulkAddInvitees,
        deleteInvitee,
        finances,
        addExpense,
        updateExpense,
        deleteExpense,
        users,
        addUser,
        updateUser,
        deleteUser,
        autoGenerateUsersFromInvitees,
        addGameRound,
        updateGameRound,
        deleteGameRound,
        rsvps,
        submitRsvp,
        photos,
        viewMode,
        setViewMode,
        adminTab,
        setAdminTab,
        activeMobileTab,
        setActiveMobileTab,
        isMusicPlaying,
        setIsMusicPlaying
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};

export const useWedding = () => {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error("useWedding must be used within a WeddingProvider");
  }
  return context;
};
