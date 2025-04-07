interface Monitor
{
    brand: string;
    powerOn(): void;
}

interface Monitor
{
    screenQuality: string;
    powerOff(): void;
}

// The monitor interface is not redeclared, rather it is merged into one

const monitorOne: Monitor = 
{
    brand: 'hp',
    screenQuality: '4k',
    powerOn(): void
    {
        console.log('Turning on...');
    },
    powerOff(): void
    {
        console.log('Turning off...');
    }

}