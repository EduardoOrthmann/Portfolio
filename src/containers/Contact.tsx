import { EnvelopeSimple, WhatsappLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import ErrorSvg from '../components/ErrorSvg';
import LoadingSvg from '../components/LoadingSvg';
import SuccessSvg from '../components/SuccessSvg';
import { useGetContactQuery } from '../graphql/generated';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Contact.module.scss';

interface FormData {
  subject: string;
  from: string;
  text: string;
}

function Contact() {
  const { data } = useGetContactQuery();
  const { fetchData } = useFetch();
  const [status, setStatus] = useState<'button' | 'loading' | 'success' | 'error'>('button');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timeoutId = setTimeout(() => {
        setStatus('button');
      }, 2000);
      
      reset();

      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    setStatus('loading');
    fetchData('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      setStatus('success');
    });
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

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="placeholder"
              id="subject"
              autoComplete="off"
              {...register('subject', { required: true })}
            />
            <label htmlFor="subject" title="Assunto" data-title="Assunto"></label>
            {errors.subject && <span>Este campo é obrigatório</span>}
          </div>
          <div>
            <input
              type="text"
              placeholder="placeholder"
              id="from"
              autoComplete="off"
              {...register('from', { required: true, pattern: /^\S+@\S+$/i })}
            />
            <label htmlFor="from" title="Seu Email" data-title="Seu Email"></label>
            {errors.from && <span>Este campo é obrigatório</span>}
          </div>
          <div>
            <textarea
              id="text"
              placeholder="placeholder"
              autoComplete="off"
              {...register('text', { required: true })}
            ></textarea>
            <label htmlFor="text" title="Sua Mensagem" data-title="Sua Mensagem"></label>
            {errors.text && <span>Este campo é obrigatório</span>}
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
