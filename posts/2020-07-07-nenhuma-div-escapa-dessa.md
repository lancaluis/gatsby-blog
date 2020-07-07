---
title: Nenhuma DIV escapa dessa!
description: Vamos aprender uns hacks para "Debugar" o CSS de uma forma prática e eficaz?
date: 2020-04-27 12:06:15
thumbnail: html5.jpg
---
> Opa! Me chamo Luís, sou Desenvolvedor Frontend e este é meu primeiro post!


Segunda-feira 8h da manhã, você acabou de pegar 3 metrôs pra chegar no trampo. Tu faz um cafézinho, liga o pc e abre o e-mail, adivinha o que tinha na caixa de entrada? Isso aí, bug pra corrigir, mas não é qualquer bug é **CSS**!

![Wrong graphic](https://dev-to-uploads.s3.amazonaws.com/i/coapmora0yc9hcrnb0tq.png)

Aí você pensa *"Pô, é só um margin-top errado que colocaram ali, nada demais"*. 3h depois: 

![Wrong CSS](https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif)

É eu sei... Nessas horas a gente pensa em mudar de profissão, virar desenvolvedor backend, ver se somos herdeiros de algo e por aí vai. Mas nem tudo está perdido, existem maneiras rápidas e fáceis (além do DevTools do navegador) de inspecionar esses elementos "fantasmas" que a gente acaba apanhando no dia a dia. Se liga:

## **Utilizando o seletor universal (*)**
Há diversas maneiras de utilizar o seletor universal dentro do CSS, uma delas é desenvolver formas de pegar esses elementos "fantasmas" dentro do nosso código. Vamos ver alguns exemplos:

```css
html * {
    background: rgba(255, 0, 0, .1);
    box-shadow: 0 0 0 1px red;
}
``` 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/zszx56hrdue0x8o3a7b5.png)

```css
*{
   outline: 1px solid #fff !important;
   background-color: rgba(0,2,54,.1) !important;
}
```
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/1paf9o1exj1zywup2m6o.png)

```css
* {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
}
```
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/49jht0wplcmfs0w5jjy9.png)

Repare que os exemplos têm praticamente o mesmo resultado, contornar todo e qualquer elemento criado dentro da página web. Lembrando que esse hack será utilizado apenas para debug, não vai deixar dentro do seletor universal durante o desenvolvimento hein... 

Tá, mas pra que eu iria contornar todos os elementos? É simples, quando você precisar arrumar algo que não vê, tu vai entender rsrs. 

## **Pesticide Extension**

Extensão do Chrome que injeta um "CSS pesticida" para visualizar todo e qualquer elemento, garantindo que possamos enxergar algo que deixamos passar e que está causando erro. Exemplo:

Screenshot do site oficial do GatsbyJs, **antes** de acionar a extensão

![Gatsby site](https://dev-to-uploads.s3.amazonaws.com/i/b8778pcoa8e08cibvx91.png "Screenshot do site oficial do GatsbyJs, antes de acionar a extensão")

Screenshot do site oficial do GatsbyJs, **depois** de acionar a extensão

![Gatsby site](https://dev-to-uploads.s3.amazonaws.com/i/3let1o86pwfd8skw4d3l.png "Screenshot do site oficial do GatsbyJs, depois de acionar a extensão")

Link para baixar a extensão: [Pesticide Extension](https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh)

Links complementares: [My favorite CSS hack](https://dev.to/gajus/my-favorite-css-hack-32g3), [How to Find Ghost CSS Elements](https://dev.to/david_ojeda/how-to-find-ghost-css-elements-1h00)

Por hoje é só, jovens. Qualquer dúvida, sugestão ou chamar pro churras é só comentar aí. *Arrivederci* :D