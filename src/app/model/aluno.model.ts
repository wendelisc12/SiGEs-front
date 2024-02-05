
export class Aluno {
    id:string;
    matricula: string;
    nome_aluno: string;
    nome_responsavel: string;
    data_nascimento: string;
    data_nascimentoDate: Date;
    cpf_responsavel: string;
    identidade_aluno: string;
    telefone: string;
    horario: string;
    serie: string;
    endereco: string;
    cep: string;
    data_pagamento: string;
    data_pagamentoDate: Date;
    valor_mensalidade: string;
  
    constructor() {
      this.id = '';
      this.matricula = '';
      this.nome_aluno = '';
      this.nome_responsavel = '';
      this.data_nascimento = '';
      this.data_nascimentoDate = new Date();
      this.cpf_responsavel = '';
      this.identidade_aluno = '';
      this.telefone = '';
      this.horario = '';
      this.serie = '';
      this.endereco = '';
      this.cep = '';
      this.data_pagamento = '';
      this.data_pagamentoDate = new Date();
      this.valor_mensalidade = '';
    }
  }
  