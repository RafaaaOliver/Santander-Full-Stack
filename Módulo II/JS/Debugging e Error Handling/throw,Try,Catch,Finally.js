/**
 * - throw: força um erro
 * sintaxe: throw (mensagem)
 */


/**
 * try: verifica o bloco e se houver erro ele joga para o catch
 * catch: recebe o erro mandado pelo try
 * finally: sempre será executado, com ou sem erro
 * sintaxe:
            try {
                conteúdo
            } catch (error) {
                console.log('Aconteceu o seguinte erro: ', error)
            }
            finally {
                console.log('Sempre serei executado')
            }
 * 
 */

/**
 * Objeto Error 
 * sintaxe:
 * new Error(message, fileName, lineNumber)
 * const MeuErro = new Error('Mensagem Inválida');
 * MeuErro.name = 'MensagemInválida'; // renomeia o Erro
 * throw MeuErro;
 */

