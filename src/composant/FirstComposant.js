import React, { useState } from "react";

const FirstComposant = ({ couleur }) => {

    const [color, setColor] = useState(couleur);//Creer une nouvelle variable couleur a chaqeu fois donc const
    const [couleurs, addCouleur] = useState([]);//Crer un nouveau tableau a chaque fois donc const
    const [nbColor, showNbColor] = useState(0);
    const [show, toggleShow] = useState(false);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';//Crée un tableau avec toutes les possibilitées
        var color = '#'; // # car les couleurs en hexa commencent par #
        for (var i = 0; i < 6; i++) { //6 car c'est la taille 2 hexa pour le bleu, 2 pour le rouge et 2 pour jaune
            color += letters[Math.floor(Math.random() * 16)]; //random parmi les 16 et on les ajoute a color
        }
        return color;
    };

    const changeColor = () => {
        const newCouleurs = couleurs.slice();
        const newColor = getRandomColor();
        //React compare si c'est le même tableau, il ne s'embete pas a regarder si le contenu est différent
        //on ne peut pas non plus faire new = ancien car ça serai pareil
        //Donc on utilise slice
        newCouleurs.push(newColor);
        addCouleur(newCouleurs);
        setColor(newColor);
        showNbColor(nbColor + 1);
    };

    const showCouleurs = () => {
        toggleShow(!show);
    }

    const resetCouleurs = () => {
        addCouleur([]); //add couleur veut un tableau et d'habitude on lui renvoie un avec la nouvelle couleur
        //Mais la on renvoit un vide 
        //Il faut aussi remettre le compteur a  0
        showNbColor(0);
    }

    return (
        <div>
            <h1 style={{ color }} onMouseEnter={changeColor} onClick={changeColor} >Survol</h1>
            <p>Couleur : {color}</p>
            <p>Nombre de couleurs : {nbColor}</p>
            <ul>
                <button onClick={resetCouleurs}>Reset les couleurs</button>
                <button onClick={showCouleurs}>{show ? "Cacher" : "Voir"} toutes les couleurs</button>
                {show ? (
                    couleurs.map(element => (
                        <li>{element}</li>
                    ))
                ) :
                    (<div></div>)
                }

            </ul>
        </div>
    )

}

export default FirstComposant;