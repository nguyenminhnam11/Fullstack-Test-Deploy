const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8000'] // Whitelist the domains you want to allow
};

export default corsOptions