import { CheckCircle, EnvelopeSimple, WhatsappLogo, XCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useGetContactQuery } from '../graphql/generated';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Contact.module.scss';

function Contact() {
  const { data } = useGetContactQuery();
  const [formData, setFormData] = useState({});
  const { fetchData } = useFetch();
  const [status, setStatus] = useState<'form' | 'loading' | 'success' | 'error'>('form');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timeoutId = setTimeout(() => {
        setStatus('form');
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('loading');
    fetchData('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!data?.contact) {
    return <p>...</p>;
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.headText}>Contato</h1>
      <div className={styles.content}>
        {status === 'form' && (
          <>
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
                <input type="text" name="subject" id="subject" required autoComplete="off" onChange={handleChange} />
                <label htmlFor="subject" title="Assunto" data-title="Assunto"></label>
              </div>
              <div>
                <input type="email" name="from" id="from" required autoComplete="off" onChange={handleChange} />
                <label htmlFor="from" title="Seu Email" data-title="Seu Email"></label>
              </div>
              <div>
                <textarea name="text" id="text" required autoComplete="off" onChange={handleChange}></textarea>
                <label htmlFor="text" title="Sua Mensagem" data-title="Sua Mensagem"></label>
              </div>
              <Button color="purple" type="submit">
                Enviar Mensagem
              </Button>
            </form>
          </>
        )}

        {status === 'loading' && (
          <svg
            className={styles.spinner}
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={styles.path}
              fill="none"
              stroke-width="6"
              stroke-linecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        )}
        {status === 'success' && <CheckCircle size={64} />}
        {status === 'error' && <XCircle size={64} />}
      </div>
    </section>
  );
}

export default Contact;
