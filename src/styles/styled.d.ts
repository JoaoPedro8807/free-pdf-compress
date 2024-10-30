import 'styled-components'
declare module 'styled-components'{
    export interface DefaultTheme{
        title: string,
        pallet:{
            primary: string
            secondary: string
            cardContrast: string
            liContrast: string
            btnColor: string
        }
        colors:{
            primary: string
            secondary: string
            cardContrast: string
            liContrast: string
            btnColor: string
    
            background: string
            text: string
        }
    }
}