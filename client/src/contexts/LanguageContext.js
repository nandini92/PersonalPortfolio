import { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from '../languages';

// create the language context with default language
export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en
});

// Provide language context to App
export const LanguageProvider = ({children}) => {
    const defaultLanguage = window.localStorage.getItem('user-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'fr');

    const provider = {
        userLanguage: userLanguage,
        //derived state - no need for separate state
        dictionary: dictionaryList[userLanguage],
        changeUserLanguage: (selected) => {
            const newLanguage = languageOptions[selected] ? selected : 'fr';
            setUserLanguage(newLanguage);
            window.localStorage.setItem('user-lang', newLanguage);
        }
    }

    return (
        <LanguageContext.Provider value={provider} >
            {children}
        </LanguageContext.Provider>
    )
}

// get text according to id and current language
export const Text = ({tid}) => {
    const languageContext = useContext(LanguageContext);

    return languageContext.dictionary[tid] || tid;
}
