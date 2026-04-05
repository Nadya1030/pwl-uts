import { render } from "../config/viewEngine";
import * as mahasiswaModel from "../models/mahasiswaModel";

export const home = async (c) => {
    const data = await mahasiswaModel.getAll();
    
    // Kita arahkan ke folder mahasiswa/index karena cuma itu file yang kita punya
    const html = await render("mahasiswa/index", { 
        title: "Dashboard Monitoring", 
        totalMahasiswa: data.length, 
        totalDosen: 35, 
        totalMatkul: 50, 
        mahasiswa: data,
        page: 'dashboard' // Kita kasih penanda kalau ini halaman dashboard
    }, c);
    
    return c.html(html);
};