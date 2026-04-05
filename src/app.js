import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import * as homeController from './controllers/homeController';
import * as mahasiswaController from './controllers/mahasiswaController';

const app = new Hono();
app.use('/css/*', serveStatic({ root: './src/public' }));

app.get('/', homeController.home); // Dashboard
app.get('/mahasiswa/list', mahasiswaController.list); // Daftar Management
app.get('/mahasiswa', mahasiswaController.index); // Form Tambah
app.post('/mahasiswa', mahasiswaController.store); // Simpan
app.get('/mahasiswa/edit/:id', mahasiswaController.editForm); // Form Edit
app.post('/mahasiswa/update/:id', mahasiswaController.updateData); // Update
app.get('/mahasiswa/delete/:id', mahasiswaController.destroy); // Hapus

export default { port: 3000, fetch: app.fetch };