import {
    Flex, Box, Text, Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function Politicas() {
    return (
        <Flex direction='column'>
            <Box bg='#0065F3' py='50px'>
                <Flex direction='column' maxW='1150px' m='auto' px={4}>
                    <Text as='h2' pb='30px' color='#FEC810'>Políticas de Privacidade e Proteção de Dados do Poder Judiciário do RN</Text>
                </Flex>
            </Box>
            <Box bg="#fff" py='50px'>
                <Flex maxW='1150px' m='auto' px={4}>
                    <Flex mr='auto' direction='column' maxW='832px' w='100%'>

                        <Accordion allowToggle py={8}>
                            <AccordionItem>

                                <AccordionButton>
                                    <Box flex="1" textAlign="left" color="#FEC810">
                                        <Text as='h3'>Disposições Preliminares</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 1º Instituir a Política de Privacidade e Proteção de Dados Pessoais (PPPDP) no âmbito do Poder Judiciário do Rio Grande do Norte - PJRN.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Parágrafo único. Esta Política será administrada pelo Desembargador Presidente, na condição de controlador, e pelo Comitê Gestor de Proteção de Dados Pessoais (CGPDP), a ser instituído mediante Resolução.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 2º Para o disposto nesta Resolução considera-se:
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        I – dado pessoal: informação relativa à pessoa natural identificada ou identificável, ou seja, qualquer informação que permita identificar, direta ou indiretamente, um indivíduo é considerado um dado pessoal;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        II – dado pessoal sensível: diz respeito aos dados que revelam informações pessoais sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, à saúde ou à vida sexual, à genética ou à biometria;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        III – titular: pessoa natural a quem se referem os dados pessoais que são objeto de tratamento;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        IV – agentes de tratamento: são agentes de tratamento o controlador e o operador de dados pessoais, os quais podem ser pessoas naturais ou jurídicas, de direito público ou privado;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        V – controlador: é a pessoa natural ou jurídica, de direito público ou privado, a quem compete definir a finalidade específica do tratamento dos dados pessoais, as ações e as principais decisões referentes às operações durante o ciclo de vida. Entre essas decisões, incluem-se as instruções fornecidas aos operadores para a realização de um determinado tratamento de dados pessoais;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        VI – operador: é a pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador, em todas as instâncias da instituição ou no âmbito de contratos ou instrumentos congêneres com ele firmados;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        VII – encarregado: pessoa física indicada pelo controlador responsável por, dentre outras atribuições, realizar a comunicação entre os titulares de dados pessoais, o controlador, a Agência Nacional de Proteção de Dados , bem como conhecer detalhadamente todo o tratamento de dados pessoais efetivado na instituição;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        VIII – ANPD: órgão da administração pública, ao qual caberá zelar pelos dados pessoais, regulamentar, fiscalizar o cumprimento da Lei nas entidades de direito público e privado e aplicar sanções em caso de descumprimento de suas determinações;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        IX – tratamento dos dados pessoais: toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão, extração, ou seja, toda e qualquer operação pertencente ao ciclo de vida dos dados pessoais;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        X – ciclo de vida dos dados: todas as etapas de manuseio dos dados, desde o surgimento destes na instituição até o respectivo descarte ou o arquivamento;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XI – consentimento: manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada. O consentimento é dispensado para o cumprimento de obrigação legal, execução de políticas públicas, realização de estudos com a anonimização dos dados pessoais sensíveis, no exercício regular de direitos em contrato, processos judiciais, administrativos e arbitrais, para a proteção da vida e segurança física das pessoas, tutela da saúde em procedimento realizado por profissionais de saúde ou autoridade sanitária e prevenção à fraude e para o tratamento de dados pessoais tornados manifestamente públicos pelo titular, desde que seja realizado de acordo com a finalidade, a boa-fé e o interesse público, resguardados os direitos do titular;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XII – anonimização: é a utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XIII – cookies: são pequenos arquivos de texto que guardam determinados dados sobre o usuário ao acessar sites ou serviços na internet. Os cookies são utilizados para garantir o bom funcionamento de sites e demais serviços online, assim como para fornecer informações sobre o endereço IP, tipo de navegador, sistema operacional, páginas visitadas, duração da visita, entre outras;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XIV – gestão de riscos: processo contínuo e técnico que consiste no desenvolvimento de ações destinadas a identificar, analisar, avaliar, mitigar, priorizar, tratar e monitorar eventos em potencial, capazes de comprometer o alcance dos objetivos organizacionais e jurisdicionais;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XV – órgão de pesquisa: órgão ou entidade da administração pública direta ou indireta ou pessoa jurídica de direito privado sem fins lucrativos e legalmente constituída sob as leis brasileiras, com sede e foro no País, que inclua em sua missão institucional ou em seu objetivo social ou estatutário a pesquisa básica ou aplicada de caráter histórico, científico, tecnológico ou estatístico;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XVI – privacidade: esfera íntima ou particular do indivíduo que se relaciona a sua vida privada, à intimidade, à honra, à imagem e a sua correspondência;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XVII – programa: conjunto de mecanismos e procedimentos administrados de forma integrada, reunidos em documento único, no qual são previstas ações articuladas e dinâmicas para atingir determinado objetivo;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XVIII – público externo: usuários dos serviços do Tribunal e todos os que, de alguma forma, estabeleçam relações com a instituição;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XIX – público interno: magistrados, servidores e colaboradores (estagiários, residentes e terceirizados);
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XX – transferência internacional de dados: transferência de dados pessoais para país estrangeiro ou organismo internacional do qual o país seja membro;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XXI – relatório de impacto à proteção de dados pessoais: documentação do controlador que contém a descrição dos processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais, bem como medidas, salvaguardas e mecanismos de mitigação de risco;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XXII – uso compartilhado de dados: comunicação, difusão, transferência internacional, interconexão de dados pessoais ou tratamento compartilhado de banco de dados pessoais por órgãos e entidades públicos no cumprimento de suas competências legais, ou entre esses e entes privados, reciprocamente, com autorização específica, para uma ou mais modalidades de tratamento permitidas por esses entes públicos, ou entre entes privados.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        XXIII – bloqueio: suspensão temporária de qualquer operação de tratamento, mediante guarda do dado pessoal ou do banco de dados.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" color="#FEC810">
                                        <Text as='h3'>Diretrizes gerais</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 3º Esta Política regula a proteção de dados pessoais nas atividades jurisdicionais e administrativas do PJRN.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Parágrafo único. As disposições desta Política se referem a dados pessoais contidos em qualquer suporte.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 4º O objetivo desta Política é definir e divulgar as regras de tratamento de dados pessoais pelo PJRN, provendo diretrizes para a atuação do CGPDP e do encarregado pelo tratamento de dados pessoais do Tribunal de Justiça do Rio Grande do Norte (TJRN).
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 5º A proteção de dados pessoais tem como fundamento:
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        I – o respeito à privacidade;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        II – a autodeterminação informativa;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        III – a liberdade de expressão, de informação, de comunicação e de opinião;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        IV – a inviolabilidade da intimidade, da honra e da imagem;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        V – o desenvolvimento econômico e tecnológico e a inovação;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        VI – a livre iniciativa, a livre concorrência e a defesa do consumidor; e
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        VII – os direitos humanos, o livre desenvolvimento da personalidade, a dignidade e o exercício da cidadania pelas pessoas naturais.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" color="#FEC810">
                                        <Text as='h3'>Diretrizes para tratamento de dados</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Princípios basilares da proteção de dados pessoais</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 6º Nas atividades de tratamento de dados pessoais, o PJRN deverá seguir os seguintes princípios:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – boa-fé: é a convicção de agir com correção e em conformidade com o Direito;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – finalidade: realização do tratamento para propósitos legítimos, específicos, explícitos e informados ao titular, sem possibilidade de tratamento posterior de forma incompatível com essas finalidades;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – adequação: compatibilidade do tratamento com as finalidades informadas ao titular, de acordo com o contexto do tratamento;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – necessidade: limitação do tratamento ao mínimo necessário para a realização de suas finalidades informadas ao titular, com abrangência dos dados pertinentes, proporcionais e não excessivos em relação às finalidades do tratamento de dados;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – livre acesso: garantia, aos titulares, de consulta facilitada e gratuita sobre a forma do tratamento, bem como sobre a integralidade de seus dados pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VI – qualidade dos dados: garantia, aos titulares, de exatidão, clareza, relevância e atualização dos dados, de acordo com a necessidade e para o cumprimento da finalidade de seu tratamento;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VII – transparência: garantia, aos titulares, de informações claras e precisas sobre a realização do tratamento e os respectivos agentes de tratamento, observados os segredos comercial e industrial;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VIII – segurança: utilização de medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações ilícitas de destruição, perda, alteração, comunicação ou difusão;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IX – prevenção: adoção de medidas para prevenir a ocorrência de danos em virtude do tratamento de dados pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    X – não discriminação: impossibilidade de realização do tratamento para fins discriminatórios, ilícitos ou abusivos;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    XI – responsabilização e prestação de contas: demonstração, pelo agente, da adoção de medidas eficazes e capazes de comprovar a observância e o cumprimento das normas de proteção de dados pessoais e, inclusive, da eficácia dessas medidas.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Diretrizes basilares</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 7º Para conformar os processos e os procedimentos do PJRN à LGPD, deverão ser consideradas as seguintes diretrizes:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – levantamento dos dados pessoais tratados na instituição;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – mapeamento dos fluxos de dados pessoais na instituição;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – verificação da conformidade do tratamento com o previsto na LGPD;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – definição e publicação de programa de gerenciamento de riscos do tratamento de dados pessoais no PJRN;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – revisão e atualização da política e dos programas de segurança da informação;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VI – definição de procedimentos e processos que garantam a disponibilidade, a integridade e a confidencialidade dos dados pessoais durante seu ciclo de vida;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VII – definição do modo de prestar as informações sobre o tratamento de dados pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VIII – revisão e adequação à LGPD dos contratos firmados no âmbito do Tribunal;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IX – revisão e adequação à LGPD dos processos e procedimentos relacionados à área de saúde;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    X – elaboração de Política de Tratamento de Dados Pessoais específica para dados relativos a crianças, jovens e idosos;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    XI – elaboração do Relatório de Impacto de Proteção de Dados Pessoais (RIPD) quando se tratar de tratamento de dados pessoais sensíveis e que potencialmente possam causar danos e riscos ao titular de dados;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    XII – definição do ciclo de vida das informações pessoais e da necessidade de consentimento para utilização de dados pessoais na esfera administrativa do Tribunal.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Tratamento de dados pessoais</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 8º O tratamento de dados pessoais pelo PJRN é realizado de acordo o expresso e inequívoco consentimento do usuário ou, ainda, nas seguintes hipóteses:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – para o cumprimento de obrigação legal ou regulatória;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – pela administração pública, para a execução de políticas públicas, incluindo o tratamento e uso compartilhado de dados;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – para a realização de estudos por órgão de pesquisa, via anonimização dos dados pessoais, sempre que possível;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – para o exercício regular de direitos em processo judicial, administrativo ou arbitral;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VI – para a proteção da vida ou da segurança física do titular ou de terceiro;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VII – para a tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VIII – quando necessário para atender ao legítimo interesse do controlador ou de terceiro;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IX – para a proteção do crédito, inclusive quanto ao disposto na legislação pertinente; e
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    X – atendimento de sua finalidade pública, na persecução do interesse público, com o objetivo de executar as competências ou cumprir as atribuições legais do serviço judicial. Parágrafo único. Entende-se o legítimo interesse do controlador como base legal para tratamento de dados pessoais em situações de apoio e promoção as suas atividades ou, ainda, a proteção do exercício regular de seus direitos ou da prestação de serviços que o beneficiem, respeitados os direitos e liberdades fundamentais do titular dos dados.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 9º O tratamento dos dados pessoais deverá ser realizado durante todo o ciclo de vida destes na instituição que envolve as operações de acesso, coleta, avaliação, classificação, armazenamento, controle, extração, comunicação, distribuição, difusão, eliminação, modificação, processamento, produção, recepção, reprodução, transferência, transmissão e utilização.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 10. O PJRN realiza o tratamento de dados pessoais pelo tempo necessário para cumprir a finalidade para os quais foram coletados, de acordo com sua base legal. Quando do término do tratamento, os dados pessoais serão eliminados, sendo autorizada a conservação nas situações previstas na legislação vigente.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 11. Os dados pessoais tratados pelo PJRN devem ser:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – protegidos por procedimentos internos, com trilhas de auditoria para registrar autorizações, utilização, impactos e violações;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – mantidos disponíveis, exatos, adequados, pertinentes e atualizados, sendo retificado ou eliminado o dado pessoal mediante informação ou constatação de impropriedade respectiva ou em face de solicitação de remoção, devendo a neutralização ou descarte do dado observar as condições e períodos da tabela de prazos de retenção de dados;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – compartilhados somente para o exercício das funções judiciárias ou para atendimento de políticas públicas aplicáveis; e
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – revistos em periodicidade mínima anual, sendo imediatamente eliminados aqueles que já não forem necessários, por terem cumprido sua finalidade ou por ter se encerrado o seu prazo de retenção.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 12. O PJRN deverá disponibilizar as informações sobre a privacidade de dados pessoais, de forma clara, adequada e atualizada, em lugar de fácil acesso e visualização em seu portal na internet, devendo conter necessariamente:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – as hipóteses que fundamentam a realização do tratamento de dados pessoais na instituição;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – a previsão legal, a finalidade e os procedimentos para tratamento de dados pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – a identificação e o contato do(a) controlador(a) e do(a) encarregado(a);
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – o nome do encarregado e o contato deste;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – as responsabilidades do(a) operador(a) envolvido(a) no tratamento.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Parágrafo único. As informações referentes ao tratamento de dados pessoais sensíveis ou referentes a crianças ou adolescentes deverão estar disponíveis em linguagem clara e simples, concisa, transparente, inteligível e acessível, na forma da lei e de acordo com as regras do regime de tramitação, sob o segredo de Justiça.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 13. A responsabilidade do PJRN pelo tratamento de dados pessoais estará circunscrita aos deveres decorrentes do exercício de suas atribuições legais e institucionais, e do emprego de boas práticas de transparência, governança e de segurança.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 14. Nos contratos mantidos com terceiros, para o fornecimento de produtos ou a prestação de serviços necessários a suas operações, o PJRN poderá, conforme o caso, adotar disciplina própria de proteção de dados pessoais, a qual deverá estar disponível e ser consultada pelos interessados.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Direitos do titular de dados pessoais</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 15. O PJRN deverá zelar para que o titular do dado pessoal possa usufruir dos direitos assegurados pela LGPD e pela legislação e regulamentação correlatas, informando adequadamente os procedimentos necessários a sua fruição nos respectivos sítios eletrônicos e materiais de divulgação específicos.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Transferência internaconal de dados</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 16. O PJRN está sujeito ao dever de expedir ou atender cartas rogatórias, colaborar para autorização de atividades de cooperação internacional em investigação e persecução oficiais, e observar outros deveres inerentes à atividade jurisdicional que implicam transferências internacionais de dados pessoais.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Parágrafo único. Excetuando-se as situações previstas no caput deste artigo, o PJRN não procederá a transferências internacionais de dados pessoais, inclusive para fins de convênios de cooperação administrativa com outros tribunais, exceto se prévia e formalmente autorizado mediante consentimento inequívoco pelo titular respectivo ou anonimização do dado pessoal para fins exclusivamente estatísticos.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Compartilhamento de dados pessoais</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 17. Quando destinados à execução de políticas públicas e na prestação dos serviços de sua competência, o PJRN realizará o compartilhamento dos dados pessoais de acordo com a interoperabilidade dos seus sistemas e serviços de tecnologia da informação.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 18. O PJRN somente poderá compartilhar dados pessoais no cumprimento de suas obrigações legais ou regulatórias, com os seguintes tipos de organizações públicas ou privadas:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – Provedores de serviços: empresas contratadas para auxiliar diretamente ou indiretamente na manutenção dos serviços administrativos ou judiciais. Esses provedores de serviços e seus colaboradores selecionados, só estão autorizados a acessar dados pessoais para as tarefas específicas, que forem requisitadas a eles com base em instruções determinadas sobre a proteção de dados pessoais. Em caso de violação de dados pessoais, respondem solidariamente conforme a legislação vigente;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – Serviços notariais e de registro: na realização das atividades delegadas pelo Poder Judiciário, se estiverem em conformidade com a LGPD;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – Órgãos e entidades públicas: no exercício de suas atribuições legais e regulatórias ou relacionadas à finalidade pública, em atenção ao interesse público.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Parágrafo único. Os serviços extrajudiciais terão seus disciplinamentos próprios expedidos pela Corregedoria-Geral de Justiça.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Agentes de tratamento de dados pessoais</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 19. O PJRN é o Controlador dos dados pessoais por ele tratados, nos termos das suas competências legal e institucional, sendo representado pelo seu Presidente.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 20. Compete ao Controlador:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – fornecer as instruções para a política de governança dos dados pessoais e respectivos programas, dentre as quais:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    a) o modo como serão tratados os dados pessoais no PJRN, a fim de que os respectivos processos sejam auditáveis;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    b) a aplicação da metodologia para o Programa de Privacidade e Proteção de Dados Pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    c) a aplicação da metodologia de gestão de riscos no tratamento de dados;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    d) a aplicação de metodologias de segurança da informação.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – decidir as questões relativas ao tratamento de dados pessoais:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – expedir normas administrativas e verificar a observância da matéria na instituição;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – incentivar a disseminação da cultura da privacidade de dados pessoais no âmbito do PJRN;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – deliberar sobre recursos administrativos relativos à proteção de dados pessoais
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VI – determinar a permanente atualização desta Política e o desenvolvimento dos respectivos instrumentos e programas.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 21. A função de Encarregado pelo Tratamento de Dados Pessoais será exercida por Desembargador indicado pelo Presidente do TJRN.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 22. Compete ao Encarregado pelo Tratamento de Dados Pessoais:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – ser o canal de comunicação entre a instituição, o titular de dados pessoais, a ANPD e o CNJ;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – prestar esclarecimentos, realizar comunicações, orientar operadores e contratados sobre as práticas tomadas ou a serem tomadas para garantir a proteção dos dados pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – executar as atribuições a si determinadas pelo Controlador;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV - receber as reclamações dos titulares quanto ao tratamento de seus dados, respondê-las e tomar providências para que sejam sanados os desvios e as medidas cabíveis;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – determinar a publicidade da dispensa de consentimento para o tratamento de dados pessoais no Tribunal, em conformidade com o previsto na LGPD;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VI – apoiar a implementação e a manutenção de práticas de conformidade do Tribunal à legislação sobre o tratamento de dados pessoais; e
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VII – manter a comunicação sobre o tratamento de dados pessoais com as autoridades internas e externas à instituição;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VIII – deter amplo e sólido conhecimento sobre a legislação de proteção de dados pessoas e normas correlatas;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IX – apoiar a implementação e a manutenção de práticas de conformidade do Tribunal à legislação sobre o tratamento de dados pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    X – responder incidentes no tratamento de dados pessoais e comunicar à Autoridade Nacional e ao(à) titular dos dados, em prazo razoável, a ocorrência de incidentes de segurança e violação com os dados pessoais, que possam causar danos ou riscos relevantes à privacidade do indivíduo;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    XI – executar as demais atribuições determinadas pelo Controlador, pela ANPD ou estabelecidas em normas complementares.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 23. Todas as operações de tratamento de dados devem ser do conhecimento do Encarregado, para que este compreenda as necessidades, riscos e desafios existentes no âmbito do PJRN, no que tange à proteção de dados.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 24. O Controlador e o Encarregado pelo Tratamento de Dados Pessoais serão assessorados pelo CGPDP para o adequado desempenho de suas funções.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 25. A identidade e as informações de contato do Encarregado deverão ser divulgadas publicamente, de forma clara e objetiva, e o mesmo atenderá quaisquer contatos, nos termos da lei, no endereço eletrônico protecaodedados@tjrn.jus.br, o qual deverá estar informado no sítio eletrônico e em materiais de divulgação desta Política.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 26. As solicitações dos titulares de dados pessoais e demais demandas relacionadas à LGPD deverão ser dirigidas à Ouvidoria, que as receberá e, indicando a pertinência temática à proteção de dados pessoais, as remeterá ao CGPDP, para análise e após juntada de parecer, encaminhará ao Encarregado.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    § 1º O Encarregado examinará o pedido e o parecer ofertado e, os encaminhará ao Desembargador Presidente, na condição de Controlador, com proposta fundamentada de solução. § 2º O Encarregado comunicará ao titular dos dados pessoais, por meio da Ouvidoria, a solução adotada pelo Controlador.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 27. São Operadores no âmbito do PJRN as pessoas naturais ou jurídicas, de direito público ou privado, que realizarem operações de tratamento de dados pessoais em nome do Controlador.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 28. Compete aos Operadores:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – seguir as instruções do Controlador;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – descrever os tipos de dados coletados e documentar as operações que lhe cabem realizar durante o processo de tratamento de dados pessoais;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – proteger a privacidade dos dados pessoais desde seu ingresso na instituição;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – firmar contratos que estabeleçam, dentre outros assuntos, o regime de atividades e responsabilidades com o controlador;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – utilizar metodologia de coleta dos dados pessoais que considere a minimização necessária para alcançar a finalidade do processo;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VI – capacitar equipe para exercer as atividades que envolvam dados pessoais com eficiência, ética, critério e responsabilidade;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VII – dar ciência ao controlador em caso de contrato com suboperador.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 29. Os fornecedores de produtos ou serviços que vierem a tratar os dados pessoais a eles confiados pelo PJRN se enquadram no conceito de operador, e estarão sujeitos a esta Política e ao cumprimento dos deveres legais e contratuais respectivos, dentre os quais se incluirão, mas não se limitarão aos seguintes:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – Assinar contrato ou termo de compromisso com cláusulas específicas sobre proteção de dados pessoais requeridas pelo PJRN;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – Apresentar evidências e garantias suficientes de que aplica adequado conjunto de medidas técnicas e administrativas de segurança, para a proteção dos dados pessoais, segundo a legislação, os instrumentos contratuais e de compromissos;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – Manter os registros de tratamento de dados pessoais que realizar, com condições de rastreabilidade e de prova eletrônica a qualquer tempo;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – Seguir fielmente as diretrizes e instruções transmitidas pelo PJRN;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    V – Facultar acesso a dados pessoais somente para o pessoal autorizado que tenha estrita necessidade respectiva e que tenha assumido compromisso formal de preservar a confidencialidade e segurança de tais dados, devendo tal compromisso está disponível em caráter permanente para exibição ao PJRN, mediante solicitação;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VI – Permitir a realização de auditorias, incluindo inspeções do PJRN ou de auditor independente autorizado por ele autorizado, e disponibilizar toda a informação necessária para demonstrar o cumprimento das obrigações estabelecidas;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VII – Auxiliar, em toda providência que estiver ao seu alcance, no atendimento pelo PJRN de obrigações perante Titulares de dados pessoais, autoridades competentes ou quaisquer outros legítimos interessados;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    VIII – Comunicar formalmente e de imediato ao PJRN a ocorrência de qualquer risco, ameaça ou incidente de segurança que possa acarretar comprometimento ou dano potencial ou efetivo a Titular de dados pessoais, evitando atrasos por conta de verificações ou inspeções;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IX – Descartar de forma irrecuperável, ou devolver para o PJRN, todos os dados pessoais e as cópias existentes, após a satisfação da finalidade respectiva ou o encerramento do tratamento por decurso de prazo ou por extinção de vínculo legal ou contratual.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 30. O PJRN poderá, a qualquer tempo e desde que não seja objeto de sigilo ou proteção legal, requisitar informações acerca do tratamento dos dados pessoais confiados a fornecedores de produtos ou serviços,
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 31. O Controlador e os Operadores respondem solidariamente por todo tratamento inadequado dos dados pessoais dos quais resulte, dentre outros, prejuízo ao titular e comprometimento da confiabilidade da instituição.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 32. O PJRN poderá padronizar fluxos e modelos de comunicação para utilização pelo Encarregado no atendimento de solicitações ou dúvidas de Titulares de dados pessoais, e demais procedimentos organizacionais, visando a assegurar a celeridade necessária para cumprimento de prazos legais de atendimentos.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 33. O Encarregado pelo Tratamento de Dados Pessoais e o CGPDP deverão manter o Controlador informado de aspectos e fatos significativos e de interesse para conhecimento pelas instâncias respectivas.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Boas práticas de segurança e governança</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 34. O PJRN, em conformidade com os princípios da LGPD dispõe de Política de Segurança da Informação que especifica e determina a adoção de medida técnicas e administrativas de segurança para a proteção de dados pessoais contra acessos não autorizados e situações acidentais ou incidentes culposos ou dolosos de destruição, perda, adulteração, compartilhamento indevido ou qualquer forma de tratamento inadequado ou ilícito.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 35. O PJRN adotará boas práticas e governança voltadas a orientar comportamentos adequados e de mitigar os riscos de comprometimento de dados pessoais, tratando-os de forma íntegra e segura, de acordo com padrões de confidencialidade, integridade e disponibilidade pelo tempo que for necessário para realizar as finalidades específicas para as quais foram coletados ou para cumprir com requerimentos legais aplicáveis em conformidade com sua Política de Segurança da Informação:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 36. Caberá ao Encarregado e ao CGPDP manterem a Administração do Tribunal informada a respeito de fatos significativos e de relevante interesse, no que diz respeito à proteção e ao tratamento de dados pessoais.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 37. Em caso de incidente de segurança que envolva dados pessoais, a ocorrência será comunicada à Agência Nacional de Proteção de Dados e ao titular quando envolver risco ou dano relevante à sua privacidade.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Parágrafo único. A comunicação sobre a descrição da natureza, riscos, titulares envolvidos, medidas técnicas e de segurança utilizadas e medidas adotadas para o tratamento do incidente, será feita conforme o prazo definido pela ANPD.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 38. O processo de análise para determinar a adequação, suficiência e eficácia dos documentos da PPPDP deve ser formalizado com o registro de diagnósticos e sugestões, assim como das respectivas aprovações.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Coleta de dados nos sítios eletrônicos e nos sistemas informatizados</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>Art. 39. O TJRN poderá, por meio dos seus sítios eletrônicos e sistemas informatizados
                                                    disponibilizados na
                                                    Internet ou em redes de comunicação internas, coletar os dados pessoais dos seus visitantes e
                                                    usuários.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>§ 1º A coleta de dados pessoais de que trata o caput se destina às atividades indispensáveis à
                                                    prestação e à
                                                    utilização dos serviços oferecidos pelo Tribunal pormeio dos seus sítios eletrônicos e sistemas
                                                    informatizados, tais como:</Text>
                                                <Text as='h6' color='#555' py={1}>I – estabelecimento e manutenção do fluxo de comunicação entre o dispositivo do visitante ou
                                                    usuário
                                                    e os
                                                    equipamentos localizados nos centros computacionais do Tribunal;</Text>
                                                <Text as='h6' color='#555' py={1}>II – autenticação do usuário nos sistemas disponibilizados pelo Tribunal;</Text>
                                                <Text as='h6' color='#555' py={1}>III – manutenção do histórico de navegação e das preferências do visitante ou usuário;</Text>
                                                <Text as='h6' color='#555' py={1}>IV – reconhecimento da assinatura digital do peticionante no processo eletrônico;</Text>
                                                <Text as='h6' color='#555' py={1}>V – resposta às manifestações encaminhadas à Ouvidoria Regional;</Text>
                                                <Text as='h6' color='#555' py={1}>VI – credenciamento do acesso a sistemas de informação e áreas restritas; e</Text>
                                                <Text as='h6' color='#555' py={1}>VII – preservação da segurança dos ativos de informação e dos recursos de Tecnologia da
                                                    Informação e
                                                    Comunicação institucionais e de terceiros.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 2º Os dados pessoais coletados a partir dos sítios eletrônicos e sistemas informatizados
                                                    incluem:</Text>
                                                <Text as='h6' color='#555' py={1}>I – data e hora dos acessos;</Text>
                                                <Text as='h6' color='#555' py={1}>II – endereço de Protocolo de Internet (conhecido como endereço IP) utilizado pelo dispositivo do
                                                    visitante
                                                    ou usuário no momento do acesso;</Text>
                                                <Text as='h6' color='#555' py={1}>III – registros dos acessos feitos a páginas eletrônicas, arquivos e aplicações disponibilizadas;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>IV – dados cadastrais daqueles que optarem por utilizar os sistemas judiciais e administrativos
                                                    (Processo
                                                    Judicial Eletrônico – PJe, Processo Administrativo Eletrônico – SIGAJUS), formulário para
                                                    manifestação
                                                    junto
                                                    à Ouvidoria e demais sistemas informatizados disponibilizados pelo Tribunal; e</Text>
                                                <Text as='h6' color='#555' py={1}>V – credenciais de acesso (nome de usuário e senha), as quais serão criptografadas e utilizadas
                                                    apenas para
                                                    fins de autenticação daqueles que venham a acessar áreas restritas.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 3º Os portais do Tribunal na Internet poderão fazer uso de arquivos, conhecidos como cookies,
                                                    para
                                                    registro e armazenamento, no dispositivo do usuário, das
                                                    informações de preferências e de atividades prévias efetuadas em suas páginas.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 4º As informações de que trata o parágrafo anterior serão utilizadas para fins estatísticos e
                                                    de
                                                    aprimoramento dos serviços, mediante o consentimento do usuário titular dos dados.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 5º Se o usuário recusar o uso de cookies, nem todos os recursos de navegação no site e nos
                                                    serviços
                                                    poderão ser acessados.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 6º Os dados pessoais coletados e tratados nos sítios eletrônicos e sistemas informatizados do
                                                    Tribunal
                                                    poderão ser regulados por atos normativos específicos, que deverão ser interpretados de acordo com
                                                    esta
                                                    Política.</Text>
                                                <Text as='h6' color='#555' py={1}>Art. 40. Na ocasião do primeiro acesso ao portal institucional do TJRN, deverá ser apresentada ao
                                                    visitante
                                                    uma mensagem padronizada, indicando que o prosseguimento na visita e nos demais acessos
                                                    significará
                                                    manifestação inequívoca de consentimento para a coleta e tratamento de dados pessoais, nos termos
                                                    desta
                                                    Política.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 1º A mensagem deverá ser apresentada ao visitante de forma clara e objetiva, e conter indicação
                                                    a
                                                    respeito
                                                    do uso de cookies, quando for o caso, mencionando os tipos utilizados e a existência de cookies de
                                                    terceiros.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 2º Ao final da mensagem, deverá ser inserido um link para esta Política, bem como um botão de
                                                    confirmação
                                                    da sua aceitação.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 3º O consentimento vigorará enquanto o visitante não o revogar expressamente.</Text>
                                                <Text as='h6' color='#555' py={1}>§ 4º A mensagem poderá ser reapresentada ao visitante periodicamente, para confirmação do
                                                    fornecimento de
                                                    consentimento.</Text>
                                                <Text as='h6' color='#555' py={1}>Art. 41. Caso haja solicitação do titular, os dados pessoais coletados via Portal Institucional
                                                    poderão ser
                                                    excluídos antes do prazo. No entanto, por motivos legais, por determinação judicial ou para fins
                                                    de
                                                    auditoria e segurança, eles poderão ser mantidos por período superior ao determinado, findo o
                                                    qual, serão
                                                    excluídos com uso de métodos seguros de eliminação.
                                                    Parágrafo único. Caso o Titular retire seu consentimento para finalidades fundamentais ao
                                                    funcionamento
                                                    do(s) serviço(s) do Portal Institucional, algumas funcionalidades poderão ficar indisponíveis.</Text>

                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Atividades de fiscalização</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 42. O CGPDP deverá definir os procedimentos e mecanismos necessários à fiscalização do cumprimento da PPPDP.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Parágrafo único. A inobservância da presente política acarretará a apuração da responsabilidade penal, civil e administrativa previstas nas normas internas do Tribunal e na legislação em vigor.
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 43. O PJRN atuará de forma colaborativa com as atividades de fiscalização promovidas por outros órgãos legitimamente interessados, desde que sejam observadas as seguintes condições:
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    I – sejam informadas em tempo hábil;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    II – tenham motivação objetiva e razoável;
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    III – não afetem a proteção de dados pessoais não abrangidos pelo propósito da fiscalização; e
                                                </Text>
                                                <Text as='h6' color='#555' py={1}>
                                                    IV – não causem impacto, dano ou interrupção nos equipamentos, pessoal ou atividades do Tribunal.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left" color="#007bff">
                                                    <Text as='h4'>Proteção de dados pessoais de magistrados, servidores e colaboradores</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                <Text as='h6' color='#555' py={1}>
                                                    Art. 44. A proteção de dados pessoais de magistrados, servidores, profissionais terceirizados e demais colaboradores deverá observar as determinações fixadas pelo CNJ e pela ANPD, na forma da LGPD e das legislação e regulamentação correlatas.
                                                </Text>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" color="#FEC810">
                                        <Text as='h3'>Disposições finais e transitórias</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 45. Esta Política deverá ser revisada e aperfeiçoada permanentemente, conforme sejam implementados programas e projetos e quando constatada a necessidade de novas previsões para conformidade do PJRN à Lei vigente ou ante a ocorrência de algumas das seguintes condições:
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        I – edição ou alteração de leis e/ou regulamentos relevantes;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        II – alteração de diretrizes estratégicas pelo PJRN;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        III – expiração da data de validade do documento, se aplicável;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        IV – mudanças significativas de tecnologia na organização, como por exemplo, a definição de armazenamento em datacenter localizado no exterior;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        V – implantação de novas tecnologias que possam gerar riscos ou graves danos aos titulares de dados pessoais, como por exemplo, a adoção de inteligência artificial como recursos tecnológicos;
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        VI – análises de risco previstas em RIPD que indique a necessidade de modificação no documento para readequação da organização, com vistas à prevenção e mitigação de riscos e danos relevantes.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 46. Independentemente da revisão ou atualização desta PPPDP, deverá ser elaborado RIPD, identificando vulnerabilidades e respectivos Planos de Ação, com periodicidade CGPDP mínima de 01 (um) ano.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 47. A inobservância da presente PPPDP acarretará a apuração das responsabilidades internas e externas previstas nas normas internas do PJRN e na legislação em vigor, podendo haver responsabilização penal, civil e administrativa.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 48. As informações protegidas por sigilo continuam resguardadas pelos atos normativos a elas relacionados.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 49. As omissões deste ato normativo serão resolvidas pelo Controlador, mediante deliberação do CGPDP.
                                    </Text>
                                    <Text as='h6' color='#555' py={1}>
                                        Art. 50. Esta Resolução entra em vigor na data de sua publicação.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <Button fontSize={['xs', 'sm', 'md']} colorScheme='blue' as='a' target='_blank' >Resolução 36 - 06/10/2021</Button>

                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}