## FinAPI - Financeira

---

### Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser possível obter dados da conta do cliente
- [x] Deve ser possível deletar uma conta
- [] Deve ser possível retornar o balance

---

### Regras de negócio

- [x] Não Deve ser possível cadastrar uma conta com CPF já existente
- [x] Não Deve ser possível buscar extrato em uma conta não existente
- [x] Não Deve ser possível fazer depósito em uma conta não existente
- [x] Não Deve ser possível fazer saque quando o saldo for insuficiente
- [x] Não Deve ser possível fazer saque em uma conta não existente
- [x] Não Deve ser possível excluir uma conta não existente