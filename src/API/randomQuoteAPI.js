const fetchQuotes = async () => {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
            throw new Error("Failed to fetch quotes");
        }
        const quotes = await response.json();
        return quotes;
    } catch (error) {
        throw error;
    }
};

export { fetchQuotes };
