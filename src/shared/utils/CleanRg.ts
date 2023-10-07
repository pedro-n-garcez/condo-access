export default function cleanRg(rg: string) {
    let newRg: string = rg;
    if(rg.includes('-') || rg.includes('.')){
        newRg = rg.replace(/[.-]/g, '');
    }

    return newRg;
}