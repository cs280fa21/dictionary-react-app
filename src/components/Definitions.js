import PropTypes from "prop-types";

function Definitions(props) {
  const { meanings } = props;

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

Definitions.propTypes = {
  meanings: PropTypes.array.isRequired
};