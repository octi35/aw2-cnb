import express from 'express';
import multer from 'multer';
import fs from 'fs'; // Importamos fs (file system) para poder guardar archivos de texto

// 1. Creo la aplicación de express
const app = express();

// 2. Configuro multer: le digo dónde y cómo guardar los archivos
const storage = multer.diskStorage({
  destination: 'uploads/', 
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// 3. Creo el middleware que procesa la subida de archivos usando esa configuración
const upload = multer({ storage });

// 4. Sirvo el "frontend" (mi archivo index.html que está en esta misma carpeta)
app.use(express.static('.'));

// 5. Ruta POST para recibir el archivo y la etiqueta
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '¡olvidaste subir el archivo!' });
  }
  
  const etiquetaPegada = req.body.tag;

  // Si nos mandaron texto, lo guardamos en un archivito .txt en la carpeta uploads
  if (etiquetaPegada) {
    // Le ponemos el mismo nombre que tiene el archivo subido, pero terminando en .txt
    const rutaDelTexto = 'uploads/' + req.file.filename + '.txt';
    fs.writeFileSync(rutaDelTexto, etiquetaPegada);
  }

  res.json({
    mensaje: '¡Archivo subido con éxito!',
    archivoOriginal: req.file.originalname,
    archivoGuardado: req.file.filename,
    etiqueta: etiquetaPegada || 'Sin etiqueta'
  });
});

// 6. Levanto el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo a pleno en http://localhost:${port}`);
});
