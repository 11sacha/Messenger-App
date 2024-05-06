export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receivedId } = req.params;
        const senderId = req.user._id;
    } catch (error) {
        console.log("Error in protected route middleware: ", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}