const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Coloque suas credenciais reais obtidas no dashboard do Cloudinary
cloudinary.config({
  cloud_name: 'gl8rrdfd',
  api_key: '168498647636196',
  api_secret: 'W0TcyKRexftgm5LSu9NIUzaHt_Y'
});

const uploadsDir = path.join(__dirname, 'public', 'uploads');

if (!fs.existsSync(uploadsDir)) {
  console.error('❌ Pasta public/uploads não encontrada no projeto!');
  process.exit(1);
}

fs.readdir(uploadsDir, (err, files) => {
  if (err) return console.error('Erro ao ler diretório:', err);

  // Filtra apenas arquivos válidos (ignora subpastas ou arquivos ocultos como .DS_Store)
  const fileList = files.filter(file => {
    const fullPath = path.join(uploadsDir, file);
    return fs.statSync(fullPath).isFile() && !file.startsWith('.');
  });

  console.log(`🚀 Iniciando upload de ${fileList.length} arquivos para o Cloudinary...`);

  fileList.forEach(file => {
    const filePath = path.join(uploadsDir, file);

    cloudinary.uploader.upload(filePath, {
      public_id: path.parse(file).name, // Mantém o nome original da imagem
      folder: 'pef-strapi',             // Cria e joga dentro dessa pasta no Cloudinary
      use_filename: true,
      unique_filename: false
    }, (error, result) => {
      if (error) {
        console.error(`❌ Erro no arquivo [${file}]:`, error.message);
      } else {
        console.log(`✅ Sucesso: ${file} -> ${result.secure_url}`);
      }
    });
  });
});
