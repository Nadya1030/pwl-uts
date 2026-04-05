import { render } from "../config/viewEngine";
import * as mahasiswaModel from "../models/mahasiswaModel";

export const list = async (c) => {
    const data = await mahasiswaModel.getAll();
    return c.html(await render("mahasiswa/index", { 
        title: "Manajemen Mahasiswa", 
        mahasiswa: data,
        page: 'list' 
    }, c));
};

export const index = async (c) => {
    const errorMsg = c.req.query("error");
    return c.html(await render("mahasiswa/index", { 
        title: "Tambah Mahasiswa", 
        page: 'create',
        error: errorMsg
    }, c));
};

export const store = async (c) => {
    try {
        const body = await c.req.parseBody();
        await mahasiswaModel.create({ nama: body.nama, nim: body.nim });
        return c.redirect("/mahasiswa/list");
    } catch (error) {
        if (error.code === 'P2002') {
            return c.redirect("/mahasiswa?error=NIM sudah terdaftar!");
        }
        return c.redirect("/mahasiswa?error=Gagal simpan");
    }
};

export const editForm = async (c) => {
    const data = await mahasiswaModel.getById(c.req.param("id"));
    return c.html(await render("mahasiswa/index", { 
        title: "Edit Mahasiswa", 
        mhs: data, 
        page: 'edit' 
    }, c));
};

export const updateData = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    await mahasiswaModel.update(id, { nama: body.nama, nim: body.nim });
    return c.redirect("/mahasiswa/list");
};

export const destroy = async (c) => {
    await mahasiswaModel.remove(c.req.param("id"));
    return c.redirect("/mahasiswa/list");
};