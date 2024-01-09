import classes from "./Characters.module.scss";

function Characters() {
  const images = [
    "cat.jpg",
    "dog.jpg",
    "fox.jpg",
    "bear.jpg",
    "meerkat.jpg",
  ];
  const characters = ["Kot", "Pies", "Lis", "Niedźwiedź", "Surykatka"];
  const fizical = [
    "Koty są zwierzętami o wyjątkowej elastyczności i elegancji. Ich ciała są smukłe, pokryte miękkim futerkiem, a kocie oczy emanują tajemniczym urokiem. Delikatne, ruchome uszy stanowią ważny element ich wyrazistej urody.",
    "Pies to istota pełna energii i entuzjazmu. Jego spojrzenie jest wiernym odzwierciedleniem bezwarunkowej miłości. Uszy często trzyma w górze, gotowe do działania, a sierść może przybierać różnorodne barwy i wzory, co podkreśla jego zróżnicowane rasy.",
    "Lisy to zwierzęta o wyjątkowym wyglądzie. Szerokie, ostre oczy, futro w odcieniach czerwieni, a także długie, gęste ogony dodają im niezwykłego uroku. Duże uszy sprawiają, że są bardzo czujne na otaczające je dźwięki.",
    "Niedźwiedzie to potężne zwierzęta, których masywne ciała i imponujące głowy sprawiają, że są łatwo rozpoznawalne. Ich futro jest gęste i zazwyczaj ma ciemniejsze barwy, co doskonale maskuje je w naturalnym otoczeniu.",
    "Surykatki mają wydłużone ciała, skośne oczy i długie ogony, co sprawia, że są niezwykle smukłe i zwinne. Ich futro jest krótkie i przylegające, często w odcieniach brązu i szarości.",
  ];
  const personality = [
    "Niezależne i tajemnicze, koty emanują chłodnym spokojem. Są chytre, zmysłowe i potrafią być niezależne, ale równocześnie potrafią być niezwykle przywiązane do swoich opiekunów. Ich łagodność i subtelność sprawiają, że są doskonałymi towarzyszami do spokojnych chwil relaksu.",
    "Pies to najwierniejszy przyjaciel człowieka. Lojalny, przyjacielski, pełen energii do zabawy. Jego radosne i ciepłe usposobienie sprawia, że jest idealnym towarzyszem zarówno do aktywnych spacerów, jak i przytulnych wieczorów na kanapie.",
    "Sprytne i zwiewne, lisy emanują dowcipem i inteligencją. Są zdolne do szybkiego myślenia i sprytnych rozwiązań problemów. Ich niezależność idzie w parze z ciekawością, co sprawia, że lisy są fascynującymi istotami, które potrafią przetrwać w różnorodnych środowiskach.",
    "Potężne i spokojne, niedźwiedzie emanują siłą i pewnością siebie. Są opiekuńcze wobec swojego terytorium oraz potrafią być delikatne w stosunku do swoich młodych. Mimo ogromnej siły, ich spokojna natura czyni je fascynującymi istotami.",
    "Surykatki są społecznymi istotami, pełnymi ciekawości i energii. Zawsze gotowe do interakcji z innymi, tworzą społeczności oparte na wzajemnej pomocy. Są aktywne i zawsze gotowe do zabawy, co sprawia, że są uroczymi i pełnymi życia stworzeniami.",
  ];

  return (
    <div className={classes.characters}>
      <h1>Poznaj zwierzęce osobowości!</h1>
      {characters.map((character, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <div className={`${classes.character} ${classes.left}`}>
              <div className={classes.imageContainer}>
                <img src={images[index]} alt={character} />
              </div>
              <div className={classes.content}>
                <h2>{character}</h2>
                <div>
                  <h3>Cechy fizyczne:</h3>
                  <p>{fizical[index]}</p>
                </div>
                <div>
                  <h3>Osobowość:</h3>
                  <p>{personality[index]}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className={`${classes.character} ${classes.right}`}>
              <div className={classes.content}>
                <h2>{character}</h2>
                <div>
                  <h3>Cechy fizyczne:</h3>
                  <p>{fizical[index]}</p>
                </div>
                <div>
                  <h3>Osobowość:</h3>
                  <p>{personality[index]}</p>
                </div>
              </div>
              <div className={classes.imageContainer}>
                <img src={images[index]} alt={character} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Characters;
