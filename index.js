var neverHaveIEver = [
    "me he hecho un tatuaje.", 
    "he 'stalkeado' a alguien que me mola.",
    "me he hecho pasar por otra persona.",
    "me he hecho un piercing.",
    "me he desnudado en público.",
    "he perdido un vuelo.",
    "he tenido un diario secreto.",
    "he plantado un árbol.",
    "he dejado plantado a alguien en una cita.",
    "me he comido las sobras de unos amigos.",
    "me han puesto una multa por robar algo.",
    "me han puesto una multa por exceso de velocidad.",
    "he hecho 'ghosting' a alguien.",
    "he querido huir de una cita.",
    "he creído en el Horóscopo.",
    "he mentido para no ir a trabajar.",
    "he dado un nombre falso.",
    "he dado un número de teléfono falso.",
    "me he puesto enferma en el transporte público.",
    "he besado al hermano de un amigo.",
    "me han negado la entrada a un club.",
    "he tenido un rollo en vacaciones.",
    "he usado el cepillo de dientes de otra persona.",
    "me he bañado desnuda.",
    "he salido con el ex de un amiga.",
    "he llorado por una película.",
    "me he roto un hueso.",
    "he gastado más de 200 euros en una noche de fiesta.",
    "he estado en una playa nudista.",
    "he copiado en un examen."
]

var level = 0

$(".next").click(function() {
    level++;
    $("p").text(neverHaveIEver[level]);    
})