import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react';
import Button from '../components/Button';
import { useGetContactQuery } from '../graphql/generated';
import styles from '../styles/Contact.module.scss';

function Contact() {
  const { data } = useGetContactQuery();

  if (!data?.contact) {
    return <p>...</p>;
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.headText}>Contato</h1>
      <div className={styles.links}>
        <div>
          <EnvelopeSimple size={32} />
          {data.contact.email}
        </div>
        <div>
          <WhatsappLogo size={32} />
          {data.contact.phoneNumber}
        </div>
      </div>
      <div className={styles.form}>
        <div>
          <input type="text" placeholder="Seu nome" />
        </div>
        <div>
          <input type="email" placeholder="Seu email" />
        </div>
        <div>
          <textarea placeholder="Sua mensagem"></textarea>
        </div>
        <Button color="purple">Enviar Mensagem</Button>
      </div>
    </section>
  );
}

export default Contact;
