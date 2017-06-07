function PingPong() {
    this.jogadores = [];
    
    
    this.setJogador = function (pNome, pAvatar) {
        if (this.validarJogador(pNome, pAvatar)) {
            this.jogadores[pNome] ={ nome: pNome, avatar: pAvatar, jogando: false };
        } else
        throw "O jogador adicionado parece ser incorreto, por favor verifique o Nome e o Avatar informado";
        
    }
    
    this.validarJogador = function (nome, avatar) {
        if (nome > 0 || avatar != undefined)
        return true;
        
        return false;
    }
}
