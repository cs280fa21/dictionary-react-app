function Definitions() {
  const meanings = [
    {
      partOfSpeech: "exclamation",
      definitions: [
        {
          definition: "Used as a greeting or to begin a phone conversation.",
          example: "hello there, Katie!",
        },
      ],
    },
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition: "An utterance of “hello”; a greeting.",
          example: "she was getting polite nods and hellos from people",
          synonyms: [
            "greeting",
            "welcome",
            "salutation",
            "saluting",
            "hailing",
            "address",
            "hello",
            "hallo",
          ],
        },
      ],
    },
    {
      partOfSpeech: "intransitive verb",
      definitions: [
        {
          definition: "Say or shout “hello”; greet someone.",
          example: "I pressed the phone button and helloed",
        },
      ],
    },
  ];

  return (
    <section className="section is-medium pt-0 pb-6" id="definitions">
      <h1 className="title">Definitions</h1>
      {
        meanings.map((meaning, index) => {
          return (
            <article className="message is-info is-medium" key={index}>
              <div className="message-header">
                <p>{meaning.partOfSpeech}</p>
              </div>
              <div className="message-body">
                <div className="content">
                  <ul style={{marginTop: 0}}>
                    {
                      meaning.definitions.map((item, i) => <li key={i}>{item.definition}</li>)
                    }
                  </ul>
                </div>
              </div>
            </article>
          );
        })
      }
    </section>
  );
}

export default Definitions;
