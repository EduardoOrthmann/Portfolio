import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react';
import Button from '../components/Button';
import { useGetContactQuery } from '../graphql/generated';
import styles from '../styles/Contact.module.scss';

function Contact() {
  const { data } = useGetContactQuery();

  if (!data?.contact) {
    return <p>...</p>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const emailData = Object.fromEntries(formData);

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(emailData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((logEmailData) => console.log(logEmailData))
      .catch((error) => console.log(error));
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.headText}>Contato</h1>
      <div className={styles.content}>
        <div>
          <div className={styles.links}>
            <div>
              <EnvelopeSimple size={40} />
              <strong>Email</strong>
              <a
                href={`mailto:${data.contact.email}?subject=Oportunidade%20para%20[cargo]%20na%20empresa%20[nome%20da%20empresa]`}
                target="_blank"
                rel="noreferrer"
              >
                {data.contact.email}
              </a>
            </div>
            <div>
              <WhatsappLogo size={40} />
              <strong>Whatsapp</strong>
              <a
                href={`https://wa.me/${data.contact.phoneNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                {data.contact.phoneNumber}
              </a>
            </div>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <input type="text" name="subject" placeholder="Assunto" />
          </div>
          <div>
            <input type="email" name="from" placeholder="Seu email" />
          </div>
          <div>
            <textarea name="text" placeholder="Sua mensagem"></textarea>
          </div>
          <Button color="purple" type="submit">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
