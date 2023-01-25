import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react';
import { useState } from 'react';
import Button from '../components/Button';
import { useGetContactQuery } from '../graphql/generated';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Contact.module.scss';

function Contact() {
  const { data } = useGetContactQuery();
  const [emailData, setEmailData] = useState({});
  const { isLoading, error } = useFetch('/api/contact', emailData);

  if (!data?.contact) {
    return <p>...</p>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setEmailData(Object.fromEntries(formData));
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
        {isLoading ? (
          <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <input type="text" name="subject" id="subject" required autoComplete="off" />
              <label htmlFor="subject" title="Assunto" data-title="Assunto"></label>
            </div>
            <div>
              <input type="email" name="from" id="from" required autoComplete="off" />
              <label htmlFor="from" title="Seu Email" data-title="Seu Email"></label>
            </div>
            <div>
              <textarea name="text" id="text" required autoComplete="off"></textarea>
              <label htmlFor="text" title="Sua Mensagem" data-title="Sua Mensagem"></label>
            </div>
            <Button color="purple" type="submit">
              Enviar Mensagem
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
