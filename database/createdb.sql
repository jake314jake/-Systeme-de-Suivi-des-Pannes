-- Création de la table des rôles
CREATE TABLE roles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom_role TEXT NOT NULL,
    description TEXT
);

-- Création de la table des utilisateurs
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    mot_de_passe TEXT NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Table d'association Utilisateur - Rôle
CREATE TABLE user_roles (
    user_id INTEGER,
    role_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    PRIMARY KEY (user_id, role_id)
);

-- Création de la table des tickets
CREATE TABLE tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    description TEXT NOT NULL,
    urgence TEXT NOT NULL,
    created_by INTEGER,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Création de la table des statuts des tickets
CREATE TABLE ticket_statuses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    statut TEXT NOT NULL,
    description TEXT NOT NULL
);

-- Table pour l'historique des mises à jour des tickets (Statuts)
CREATE TABLE ticket_updates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id INTEGER,
    statut_id INTEGER,
    date_changement DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id),
    FOREIGN KEY (statut_id) REFERENCES ticket_statuses(id)
);

-- Table des commentaires sur les tickets
CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id INTEGER,
    user_id INTEGER,
    commentaire TEXT NOT NULL,
    date_commentaire DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table pour l'assignation des tickets
CREATE TABLE ticket_assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id INTEGER,
    user_id INTEGER,
    date_assignation DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table des notifications pour les utilisateurs
CREATE TABLE notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    ticket_id INTEGER,
    message TEXT NOT NULL,
    statut TEXT NOT NULL DEFAULT 'Non lu',
    date_envoi DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (ticket_id) REFERENCES tickets(id)
);
