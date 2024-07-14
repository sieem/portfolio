import { Client } from "basic-ftp";

async function uploadFileToFTP() {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    });

    await client.uploadFromDir("dist", "/domains/siemlasseel.be/public_html");
  } catch (error) {
    console.error("Failed to upload file:", error);
  }

  client.close();
}

uploadFileToFTP();