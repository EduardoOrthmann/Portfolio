import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import ErrorSvg from '../components/ErrorSvg';
import LoadingSvg from '../components/LoadingSvg';
import SuccessSvg from '../components/SuccessSvg';
import { useGetContactQuery } from '../graphql/generated';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Contact.module.scss';

function Contact() {
  const { data } = useGetContactQuery();
  const [formData, setFormData] = useState({});
  const { fetchData } = useFetch();
  const [status, setStatus] = useState<'button' | 'loading' | 'success' | 'error'>('button');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timeoutId = setTimeout(() => {
        setStatus('button');
      }, 2000);
      formRef.current?.reset();

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

        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
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
          <Button color="purple" type="submit" disabled={status !== 'button'}>
            <div className={styles.buttonContent}>
              {status === 'button' && 'Enviar Mensagem'}
              {status === 'loading' && <LoadingSvg />}
              {status === 'success' && (
                <div className={`${styles.buttonSvg} ${styles.success}`}>
                  <SuccessSvg />
                </div>
              )}
              {status === 'error' && (
                <div className={`${styles.buttonSvg} ${styles.error}`}>
                  <ErrorSvg />
                </div>
              )}
            </div>
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
