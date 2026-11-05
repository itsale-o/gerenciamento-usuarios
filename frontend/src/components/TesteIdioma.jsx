import { useTranslation } from 'react-i18next';

function TesteIdioma() {
    const { t, i18n } = useTranslation('common');

    function alterarIdioma(idioma) {
        i18n.changeLanguage(idioma);
        localStorage.setItem('language', idioma);
    }

    return (
        <div style={{ padding: '30px' }}>
            <h1>Teste de internacionalização</h1>

            <p>{t('save')}</p>
            <p>{t('cancel')}</p>
            <p>{t('loading')}</p>

            <button onClick={() => alterarIdioma('pt-BR')}>
                Português
            </button>

            <button onClick={() => alterarIdioma('en-US')}>
                English
            </button>
        </div>
    );
}

export default TesteIdioma;