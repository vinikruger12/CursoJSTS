export function secondsToTime(seconds: number): string{
    const minutos = Math.floor(seconds / 60) % 60;
    seconds = seconds - (minutos*60);
    
    if(minutos < 10){
        if(seconds < 10) return '0' + minutos + ':0' + seconds; 
        return '0' + minutos + ':' + seconds; 
    }

    if(seconds < 10) return minutos + ':0' + seconds; 
    
    return minutos + ':' + seconds; 
}