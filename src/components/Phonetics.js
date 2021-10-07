import PropTypes from "prop-types";

function Phonetics(props) {
  const { phonetics } = props;

  return (
    <section className="section is-medium pt-0 pb-6" id="phonetics">
      <h1 className="title">Phonetics</h1>
      {
        phonetics.map((phonetic, index) => {
          return (
            <article className="message is-medium" key={index}>
              <div className="message-header">
                {phonetic.text}
              </div>
              <div className="message-body">
                <audio controls style={{width: "100%"}}>
                  <source src={phonetic.audio} type="audio/mpeg"/>
                  Your browser does not support the audio element.
                </audio>
              </div>
            </article>
          )
        })
      }
    </section>
  );
}

export default Phonetics;

Phonetics.propTypes = {
  phonetics: PropTypes.array.isRequired
};