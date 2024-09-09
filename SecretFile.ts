(() => {
    class SecretFile{
        secretMessage(){
            console.log("shhh...");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();
}
)();