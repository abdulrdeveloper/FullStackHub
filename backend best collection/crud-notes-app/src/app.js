import express from 'express';
import noteModel from './models/note.model.js';
const app = express();
app.use(express.json());


app.post('/notes', async (req, res) => {
    try {
        const data = req.body;
        await noteModel.create({
            title: data.title,
            description: data.description
        });
        res.status(201).json({ message: 'Note created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating note', error: error.message });
    }
});


app.get('/notes', async (_req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).json({
            message: 'Notes fetched successfully',
            notes: notes
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes', error: error.message });
    }
});


app.delete('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        await noteModel.findByIdAndDelete(noteId);
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note', error: error.message });
    }
});


app.patch('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const updatedData = req.body;
        await noteModel.findByIdAndUpdate(noteId, updatedData, { new: true });
        res.status(200).json({ message: 'Note updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating note', error: error.message });
    }
})

export default app;
