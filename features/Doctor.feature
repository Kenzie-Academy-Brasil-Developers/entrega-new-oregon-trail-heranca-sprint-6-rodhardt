# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo racionar meus mantimentos
    E curar aqueles que não estiverem saudáveis
    Para que eu e todos possamos seguir a viagem.

    Contexto:
        Dado um Doctor de nome "Rafael"
        E ele sempre começa a sua viagem com 1 refeição
        E ele sempre começa a sua viagem em estado saudável.

    Cenário: Curou alguém doente
        Quando o Doctor curar um Traveler doente
        Então o Traveler deverá ficar saudável

    Cenário: Curou alguém já saudável
        Quando o Doctor tentar curar um Traveler já saudável
        Então o Traveler deverá continuar saudável