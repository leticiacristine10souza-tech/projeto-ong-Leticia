document.addEventListener('DOMContentLoaded', () => {
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');
    const form = document.getElementById('form-cadastro');

    // Máscara CPF (000.000.000-00)
    if (inputCPF) {
        inputCPF.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            v = v.replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = v;
        });
    }

    // Máscara Telefone (00) 00000-0000
    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            if (v.length <= 10) {
                v = v.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
            } else {
                v = v.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
            }
            e.target.value = v;
        });
    }

    // Máscara CEP (00000-000)
    if (inputCEP) {
        inputCEP.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 8);
            v = v.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = v;
        });
    }

    // Feedback de Envio
    if (form) {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios respeitando o formato correto.');
            } else {
                e.preventDefault();
                alert('Cadastro concluído com sucesso! Obrigado pelo interesse em colaborar.');
                form.reset();
            }
        });
    }
});