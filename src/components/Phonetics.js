function Phonetics() {
  return (
    <>
      <section class="section is-medium pt-0 pb-6" id="phonetics">
        <h1 class="title">Phonetics</h1>
        <article class="message is-medium">
          <div class="message-header">/həˈloʊ/</div>
          <div class="message-body">
            <audio controls style={{width: "100%"}}>
              <source
                src="https://lex-audio.useremarkable.com/mp3/hello_us_1_rr.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </article>

        <article class="message is-medium">
          <div class="message-header">/hɛˈloʊ/</div>
          <div class="message-body">
            <audio controls style={{width: "100%"}}>
              <source
                src="https://lex-audio.useremarkable.com/mp3/hello_us_2_rr.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </article>
      </section>
    </>
  );
}

export default Phonetics;
