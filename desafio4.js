import React, { useState, useEffect } from 'react';
import $ from 'jquery';

/**
 * Desafio React
 * 
 * Descreva qual a finalidade e como funciona 
 * a execução deste componente funcional.
 */
function Test4() {
    const [clicks, setClicks] = useState(0);  //cria variavel de estado clicks, valor inicial = 0
    const [pos, setPos] = useState({     //cria variavel de estado pos, que guarda o valor x e y do mouse ambos = 0
      x: 0,
      y: 0,
    });
    const [data, setData] = useState([]); //inicia a variavel data como array vazio
  
    function handleClick() {     //funcao que vai ser utilizada no click, toda vez que clicar aumenta contador "clicks" + 1
      try {                      //try catch foi inserido para quando o programa for rodar e tiver algum erro, ele manda um aviso
        setClicks((clicks) => clicks + 1);
      } catch (err) {
        console.error(err);
      }
    }
  
    function handleMouseMove(e) { //altera o valor da variavel "pos"
      setPos({
        x: e.pageX,
        y: e.pageY,
      });
    }
  
    useEffect(() => {  //salva posicao do click no array data toda vez que o "clicks" atualizar e for pelo menos 1
      if (clicks > 0) {
        setData([
          ...data,
          pos,
        ]);
      }
    }, [clicks]);
  
    useEffect(() => {     //quando componente carregar pela primeira vez, adiciona no window os eventos de click e mousemove
      $(window).on('mousemove', (e) => { handleMouseMove(e); });
      $(window).on('click', handleClick);
      return () => {         //quando componente for desrenderizado remove os eventos do window que foi criado anteriormente
        $(window).off('mousemove');
        $(window).off('click');
      };
    }, []);
  
    return (<div><p>{clicks}</p><p>{`${pos.x} - ${pos.y}`}</p></div>);  //mostra a quantidade de click e a posicao do usuario 
  }
  
  export default Test4;