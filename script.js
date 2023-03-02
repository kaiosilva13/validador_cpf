let valor_input = document.getElementById('CPF')
let valor_resultado = document.getElementById('res')
valor_input.addEventListener('keypress', function (e){
    if(!checa_caractere(e)){
        e.preventDefault()
    }
    if(valor_input.value.length == 3 || valor_input.value.length == 7){
        valor_input.value += '.'
    }
    if(valor_input.value.length == 11){
        valor_input.value += '-'
    }
})
function checa_caractere(e){
    const pattern = '[0-9]'
    if(e.key.match(pattern)){
        return true
    }
}

function valida_cpf(){
    const botao = document.getElementsByClassName('Botao')
    const cpf_valor = valor_input.value
    let cpf_sem_pontuacao = cpf_valor.replace(/[.]/g,'').replace('-','')
    if (!isNaN(cpf_valor) & cpf_valor.length == 11 || cpf_valor.length == 14 & cpf_valor[3] == '.'){
        if (new Set(cpf_sem_pontuacao).size == 1){
            valor_resultado.style.backgroundColor = 'red'
            valor_resultado.innerHTML = 'Cpf Inválido'
        }else{
            let cpf_a_ser_calculado = cpf_sem_pontuacao.slice(0,9)
            const multiplicadores_digito1 = [10,9,8,7,6,5,4,3,2]
            let soma_digito1 = 0
            for(let dig in cpf_a_ser_calculado){
                soma_digito1 += Number(cpf_sem_pontuacao[dig]) * multiplicadores_digito1[dig]
            }
            let calc_digito1 = (soma_digito1 * 10) % 11
            const digito1 = calc_digito1<=9?calc_digito1:0
            cpf_a_ser_calculado += String(digito1)
            if(cpf_sem_pontuacao.slice(0,10) == cpf_a_ser_calculado){
                const multiplicadores_digito2 = [11,10,9,8,7,6,5,4,3,2]
                let soma_digito2 = 0
                for(let dig in cpf_a_ser_calculado){
                    soma_digito2 += Number(cpf_sem_pontuacao[dig]) * multiplicadores_digito2[dig]
                }
                let calc_digito2 = (soma_digito2 * 10) % 11
                const digito1 = calc_digito2<=9?calc_digito2:0
                cpf_a_ser_calculado += String(digito1)
                
                if(cpf_a_ser_calculado == cpf_sem_pontuacao){
                    valor_resultado.style.backgroundColor = 'green'
                    valor_resultado.innerHTML = 'Cpf válido'
                }else{
                    valor_resultado.style.backgroundColor = 'red'
                    valor_resultado.innerHTML = 'Cpf Inválido'
                }
            }else{
                valor_resultado.style.backgroundColor = 'red'
                valor_resultado.innerHTML = 'Cpf Inválido'
            }
            }
        
    }else{
        alert('Erro de configuração de valor de cpf. O cpf pussuí configuração de 11 digítos: ABC.DEF.GHI-JK.')
        valor_input.value = ''
        valor_input.focus()
    } 
}

function limpa_resultado(){
    valor_resultado.innerHTML = ''
    valor_resultado.style.backgroundColor = 'white'
}

function muda_cor_botao(){
    let botao = document.getElementById('botao')
    botao.style.backgroundColor = 'rgb(6, 182, 82)'
    botao.style.borderColor = 'rgb(6, 182, 82)'
}

function volta_cor_botao(){
    let botao = document.getElementById('botao')
    botao.style.backgroundColor = 'rgb(25, 238, 117)'
    botao.style.borderColor = 'rgb(45, 247, 132)'
}