import ReactGA from 'react-ga'

export const initGA = () => {
    ReactGA.initialize('UA-97402691-1')
}

export const logPagePview = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}