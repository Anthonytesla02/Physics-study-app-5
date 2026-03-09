# 23.12 RLC Series AC Circuits

[Original URL](https://openstax.org/books/college-physics-2e/pages/23-12-rlc-series-ac-circuits)

## 23.12 RLC Series AC Circuits

### Learning Objectives

By the end of this section, you will be able to:

*   Calculate the impedance, phase angle, resonant frequency, power, power factor, voltage, and/or current in a RLC series circuit.
*   Draw the circuit diagram for an RLC series circuit.
*   Explain the significance of the resonant frequency.

### Impedance

When alone in an AC circuit, inductors, capacitors, and resistors all impede current. How do they behave when all three occur together? Interestingly, their individual resistances in ohms do not simply add. Because inductors and capacitors behave in opposite ways, they partially to totally cancel each other’s effect. [Figure 23.46](23-12-rlc-series-ac-circuits#import-auto-id1169736621511) shows an _RLC_ series circuit with an AC voltage source, the behavior of which is the subject of this section. The crux of the analysis of an _RLC_ circuit is the frequency dependence of XLXL and XCXC, and the effect they have on the phase of voltage versus current (established in the preceding section). These give rise to the frequency dependence of the circuit, with important “resonance” features that are the basis of many applications, such as radio tuners.

![The figure describes an R LC series circuit. It shows a resistor R connected in series with an inductor L, connected to a capacitor C in series to an A C source V. The voltage of the A C source is given by V equals V zero sine two pi f t. The voltage across R is V R, across L is V L and across C is V C.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/db448b667d2bb9bc302a92c34e7459916e77c0d0)

Figure 23.46 An _RLC_ series circuit with an AC voltage source.

The combined effect of resistance RR, inductive reactance XLXL, and capacitive reactance XCXC is defined to be impedance, an AC analogue to resistance in a DC circuit. Current, voltage, and impedance in an _RLC_ circuit are related by an AC version of Ohm’s law:

I 0 \= V 0 Z or I rms \= V rms Z . I 0 \= V 0 Z or I rms \= V rms Z .

23.63

Here I0I0 is the peak current, V0V0 the peak source voltage, and Z Z is the impedance of the circuit. The units of impedance are ohms, and its effect on the circuit is as you might expect: the greater the impedance, the smaller the current. To get an expression for ZZ in terms of R R, XLXL, and XCXC, we will now examine how the voltages across the various components are related to the source voltage. Those voltages are labeled VRVR, VLVL, and VCVC in [Figure 23.46](23-12-rlc-series-ac-circuits#import-auto-id1169736621511).

Conservation of charge requires current to be the same in each part of the circuit at all times, so that we can say the currents in RR, LL, and CC are equal and in phase. But we know from the preceding section that the voltage across the inductor VLVL leads the current by one-fourth of a cycle, the voltage across the capacitor VCVC follows the current by one-fourth of a cycle, and the voltage across the resistor VRVR is exactly in phase with the current. [Figure 23.47](23-12-rlc-series-ac-circuits#import-auto-id1169738164070) shows these relationships in one graph, as well as showing the total voltage around the circuit V\=VR+VL+VCV\=VR+VL+VC, where all four voltages are the instantaneous values. According to Kirchhoff’s loop rule, the total voltage around the circuit V V is also the voltage of the source.

You can see from [Figure 23.47](23-12-rlc-series-ac-circuits#import-auto-id1169738164070) that while VRVR is in phase with the current, VLVL leads by 90º 90º, and VCVC follows by 90º 90º. Thus VLVL and VCVC are 180º 180º out of phase (crest to trough) and tend to cancel, although not completely unless they have the same magnitude. Since the peak voltages are not aligned (not in phase), the peak voltage V0V0 of the source does _not_ equal the sum of the peak voltages across RR, LL, and CC. The actual relationship is

V 0 \= V 0R 2 + ( V 0L − V 0C ) 2 , V 0 \= V 0R 2 + ( V 0L − V 0C ) 2 ,

23.64

where V0RV0R, V0LV0L, and V0CV0C are the peak voltages across RR, LL, and CC, respectively. Now, using Ohm’s law and definitions from [Reactance, Inductive and Capacitive](23-11-reactance-inductive-and-capacitive), we substitute V0\=I0ZV0\=I0Z into the above, as well as V0R\=I0RV0R\=I0R, V0L\=I0XLV0L\=I0XL, and V0C\=I0XCV0C\=I0XC, yielding

I0Z\= I 0 2 R2 + ( I0XL−I0XC)2\=I0R2+(XL−XC)2.I0Z\= I 0 2 R2 + ( I0XL−I0XC)2\=I0R2+(XL−XC)2.

23.65

I0I0 cancels to yield an expression for Z Z:

Z\=R2+(XL−XC)2,Z\=R2+(XL−XC)2,

23.66

which is the impedance of an _RLC_ series AC circuit. For circuits without a resistor, take R \= 0 R \= 0 ; for those without an inductor, take XL\=0XL\=0; and for those without a capacitor, take XC\=0XC\=0.

![The figure shows graphs showing the relationships of the voltages in an RLC circuit to the current. It has five graphs on the left and two graphs on the right. The first graph on the right is for current I versus time t. Current is plotted along Y axis and time is along X axis. The curve is a smooth progressive sine wave. The second graph is on the right is for voltage V R versus time t. Voltage V R is plotted along Y axis and time is along X axis. The curve is a smooth progressive sine wave. The third graph is on the right is for voltage V L versus time t. Voltage V L is plotted along Y axis and time is along X axis. The curve is a smooth progressive cosine wave. The fourth graph is on the right is for voltage V C versus time t. Voltage V C is plotted along Y axis and time t is along X axis. The curve is a smooth progressive cosine wave starting from negative Y axis. The fifth graph shows the voltage V verses time t for the R L C circuit. Voltage V is plotted along Y axis and time t is along X axis. The curve is a smooth progressive sine wave starting from a point near to origin on negative X axis. The first and the fifth graphs are again shown on the right and their amplitudes and phases compared. The current graph is shown to have a lesser amplitude.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e6b379ab4c19895ddc166fff9b0dd47b0c019c3e)

Figure 23.47 This graph shows the relationships of the voltages in an _RLC_ circuit to the current. The voltages across the circuit elements add to equal the voltage of the source, which is seen to be out of phase with the current.

#### Calculating Impedance and Current

An _RLC_ series circuit has a 40.0 Ω 40.0 Ω resistor, a 3.00 mH inductor, and a 5.00 μF 5.00 μF capacitor. (a) Find the circuit’s impedance at 60.0 Hz and 10.0 kHz, noting that these frequencies and the values for L L and C C are the same as in [Example 23.10](23-11-reactance-inductive-and-capacitive) and [Example 23.11](23-11-reactance-inductive-and-capacitive). (b) If the voltage source has Vrms\=120VVrms\=120V, what is IrmsIrms at each frequency?

#### Strategy

For each frequency, we use Z\=R2+(XL−XC)2Z\=R2+(XL−XC)2 to find the impedance and then Ohm’s law to find current. We can take advantage of the results of the previous two examples rather than calculate the reactances again.

#### Solution for (a)

At 60.0 Hz, the values of the reactances were found in [Example 23.10](23-11-reactance-inductive-and-capacitive) to be XL\=1.13ΩXL\=1.13Ω and in [Example 23.11](23-11-reactance-inductive-and-capacitive) to be XC\=531 Ω XC\=531 Ω . Entering these and the given 40.0 Ω 40.0 Ω for resistance into Z\=R2+(XL−XC)2Z\=R2+(XL−XC)2 yields

Z \= R2+(XL−XC)2 \= (40.0Ω)2+(1.13Ω−531Ω)2 \= 531Ω at 60.0 Hz.Z \= R2+(XL−XC)2 \= (40.0Ω)2+(1.13Ω−531Ω)2 \= 531Ω at 60.0 Hz.

23.67

Similarly, at 10.0 kHz, XL\=188ΩXL\=188Ω and XC\=3.18ΩXC\=3.18Ω, so that

Z \= (40.0Ω)2+(188Ω−3.18Ω)2 \= 190Ω at 10.0 kHz. Z \= (40.0Ω)2+(188Ω−3.18Ω)2 \= 190Ω at 10.0 kHz.

23.68

#### Discussion for (a)

In both cases, the result is nearly the same as the largest value, and the impedance is definitely not the sum of the individual values. It is clear that XLXL dominates at high frequency and XCXC dominates at low frequency.

#### Solution for (b)

The current IrmsIrms can be found using the AC version of Ohm’s law in Equation Irms\=Vrms/ZIrms\=Vrms/Z:

Irms\=VrmsZ\=120 V531 Ω\=0.226 AIrms\=VrmsZ\=120 V531 Ω\=0.226 A at 60.0 Hz

Finally, at 10.0 kHz, we find

Irms\=VrmsZ\=120 V190 Ω\=0.633 AIrms\=VrmsZ\=120 V190 Ω\=0.633 A at 10.0 kHz

#### Discussion for (a)

The current at 60.0 Hz is the same (to three digits) as found for the capacitor alone in [Example 23.11](23-11-reactance-inductive-and-capacitive). The capacitor dominates at low frequency. The current at 10.0 kHz is only slightly different from that found for the inductor alone in [Example 23.10](23-11-reactance-inductive-and-capacitive). The inductor dominates at high frequency.

### Resonance in _RLC_ Series AC Circuits

How does an _RLC_ circuit behave as a function of the frequency of the driving voltage source? Combining Ohm’s law, Irms\=Vrms/ZIrms\=Vrms/Z, and the expression for impedance Z Z from Z\=R2+(XL−XC)2Z\=R2+(XL−XC)2 gives

Irms\=VrmsR2+(XL−XC)2.Irms\=VrmsR2+(XL−XC)2.

23.69

The reactances vary with frequency, with XLXL large at high frequencies and XCXC large at low frequencies, as we have seen in three previous examples. At some intermediate frequency f0f0, the reactances will be equal and cancel, giving _Z\=RZ\=R_ —this is a minimum value for impedance, and a maximum value for IrmsIrms results. We can get an expression for f0f0 by taking

XL\=XC.XL\=XC.

23.70

Substituting the definitions of XLXL and XCXC,

2πf0L\=12πf0C.2πf0L\=12πf0C.

23.71

Solving this expression for f0f0 yields

f0\=12πLC,f0\=12πLC,

23.72

where f0f0 is the resonant frequency of an _RLC_ series circuit. This is also the _natural frequency_ at which the circuit would oscillate if not driven by the voltage source. At f0f0, the effects of the inductor and capacitor cancel, so that _Z\=RZ\=R_, and IrmsIrms is a maximum.

Resonance in AC circuits is analogous to mechanical resonance, where resonance is defined to be a forced oscillation—in this case, forced by the voltage source—at the natural frequency of the system. The receiver in a radio is an _RLC_ circuit that oscillates best at its f0f0. A variable capacitor is often used to adjust f0f0 to receive a desired frequency and to reject others. [Figure 23.48](23-12-rlc-series-ac-circuits#import-auto-id1169738205664) is a graph of current as a function of frequency, illustrating a resonant peak in IrmsIrms at f0f0. The two curves are for two different circuits, which differ only in the amount of resistance in them. The peak is lower and broader for the higher-resistance circuit. Thus the higher-resistance circuit does not resonate as strongly and would not be as selective in a radio receiver, for example.

![The figure describes a graph of current I versus frequency f. Current I r m s is plotted along Y axis and frequency f is plotted along X axis. Two curves are shown. The upper curve is for small resistance and lower curve is for large resistance. Both the curves have a smooth rise and a fall. The peaks are marked for frequency f zero. The curve for smaller resistance has a higher value of peak than the curve for large resistance.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e8f2593326752c94af4fa44e83d49d323f66e8ac)

Figure 23.48 A graph of current versus frequency for two _RLC_ series circuits differing only in the amount of resistance. Both have a resonance at f0f0, but that for the higher resistance is lower and broader. The driving AC voltage source has a fixed amplitude V0V0.

#### Calculating Resonant Frequency and Current

For the same _RLC_ series circuit having a 40.0 Ω 40.0 Ω resistor, a 3.00 mH inductor, and a 5.00 μF 5.00 μF capacitor: (a) Find the resonant frequency. (b) Calculate IrmsIrms at resonance if VrmsVrms is 120 V.

#### Strategy

The resonant frequency is found by using the expression in f0\=12πLCf0\=12πLC. The current at that frequency is the same as if the resistor alone were in the circuit.

#### Solution for (a)

Entering the given values for L L and C C into the expression given for f0f0 in f0\=12πLCf0\=12πLC yields

f0 \= 12πLC \= 12π(3.00×10−3 H)(5.00×10−6 F)\=1.30 kHz. f0 \= 12πLC \= 12π(3.00×10−3 H)(5.00×10−6 F)\=1.30 kHz.

23.73

#### Discussion for (a)

We see that the resonant frequency is between 60.0 Hz and 10.0 kHz, the two frequencies chosen in earlier examples. This was to be expected, since the capacitor dominated at the low frequency and the inductor dominated at the high frequency. Their effects are the same at this intermediate frequency.

#### Solution for (b)

The current is given by Ohm’s law. At resonance, the two reactances are equal and cancel, so that the impedance equals the resistance alone. Thus,

Irms\=VrmsZ\=120 V40.0 Ω\=3.00 A.Irms\=VrmsZ\=120 V40.0 Ω\=3.00 A.

23.74

#### Discussion for (b)

At resonance, the current is greater than at the higher and lower frequencies considered for the same circuit in the preceding example.

### Power in _RLC_ Series AC Circuits

If current varies with frequency in an _RLC_ circuit, then the power delivered to it also varies with frequency. But the average power is not simply current times voltage, as it is in purely resistive circuits. As was seen in [Figure 23.47](23-12-rlc-series-ac-circuits#import-auto-id1169738164070), voltage and current are out of phase in an _RLC_ circuit. There is a phase angle ϕϕ between the source voltage VV and the current II, which can be found from

cosϕ\=RZ.cosϕ\=RZ.

23.75

For example, at the resonant frequency or in a purely resistive circuit _Z\=RZ\=R_, so that cosϕ\=1cosϕ\=1. This implies that ϕ\=0ºϕ\=0º and that voltage and current are in phase, as expected for resistors. At other frequencies, average power is less than at resonance. This is both because voltage and current are out of phase and because IrmsIrms is lower. The fact that source voltage and current are out of phase affects the power delivered to the circuit. It can be shown that the _average power_ is

P ave \= I rms V rms cos ϕ , P ave \= I rms V rms cos ϕ ,

23.76

Thus cosϕcosϕ is called the power factor, which can range from 0 to 1. Power factors near 1 are desirable when designing an efficient motor, for example. At the resonant frequency, cosϕ\=1cosϕ\=1.

#### Calculating the Power Factor and Power

For the same _RLC_ series circuit having a 40.0 Ω 40.0 Ω resistor, a 3.00 mH inductor, a 5.00 μF 5.00 μF capacitor, and a voltage source with a V rms V rms of 120 V: (a) Calculate the power factor and phase angle for f\=60.0Hzf\=60.0Hz. (b) What is the average power at 50.0 Hz? (c) Find the average power at the circuit’s resonant frequency.

#### Strategy and Solution for (a)

The power factor at 60.0 Hz is found from

cosϕ\=RZ.cosϕ\=RZ.

23.77

We know Z \= 531 Ω Z \= 531 Ω from [Example 23.12](23-12-rlc-series-ac-circuits#fs-id1169737723572), so that

cosϕ\=40.0Ω531 Ω\=0.0753 at 60.0 Hz.cosϕ\=40.0Ω531 Ω\=0.0753 at 60.0 Hz.

23.78

This small value indicates the voltage and current are significantly out of phase. In fact, the phase angle is

ϕ\=cos−10.0753\=85.7º at 60.0 Hz.ϕ\=cos−10.0753\=85.7º at 60.0 Hz.

23.79

#### Discussion for (a)

The phase angle is close to 90º 90º, consistent with the fact that the capacitor dominates the circuit at this low frequency (a pure _RC_ circuit has its voltage and current 90º 90º out of phase).

#### Strategy and Solution for (b)

The average power at 60.0 Hz is

Pave\=IrmsVrmscosϕ.Pave\=IrmsVrmscosϕ.

23.80

IrmsIrms was found to be 0.226 A in [Example 23.12](23-12-rlc-series-ac-circuits#fs-id1169737723572). Entering the known values gives

Pave\=(0.226 A)(120 V)(0.0753)\=2.04 W at 60.0 Hz.Pave\=(0.226 A)(120 V)(0.0753)\=2.04 W at 60.0 Hz.

23.81

#### Strategy and Solution for (c)

At the resonant frequency, we know cosϕ\=1cosϕ\=1, and IrmsIrms was found to be 6.00 A in [Example 23.13](23-12-rlc-series-ac-circuits#fs-id1169738045330). Thus,

Pave\=(3.00 A)(120 V)(1)\=360 WPave\=(3.00 A)(120 V)(1)\=360 W at resonance (1.30 kHz)

#### Discussion

Both the current and the power factor are greater at resonance, producing significantly greater power than at higher and lower frequencies.

Power delivered to an _RLC_ series AC circuit is dissipated by the resistance alone. The inductor and capacitor have energy input and output but do not dissipate it out of the circuit. Rather they transfer energy back and forth to one another, with the resistor dissipating exactly what the voltage source puts into the circuit. This assumes no significant electromagnetic radiation from the inductor and capacitor, such as radio waves. Such radiation can happen and may even be desired, as we will see in the next chapter on electromagnetic radiation, but it can also be suppressed as is the case in this chapter. The circuit is analogous to the wheel of a car driven over a corrugated road as shown in [Figure 23.49](23-12-rlc-series-ac-circuits#import-auto-id1169736885804). The regularly spaced bumps in the road are analogous to the voltage source, driving the wheel up and down. The shock absorber is analogous to the resistance damping and limiting the amplitude of the oscillation. Energy within the system goes back and forth between kinetic (analogous to maximum current, and energy stored in an inductor) and potential energy stored in the car spring (analogous to no current, and energy stored in the electric field of a capacitor). The amplitude of the wheels’ motion is a maximum if the bumps in the road are hit at the resonant frequency.

![The figure describes the path of motion of a wheel of a car. The front wheel of a car is shown. A shock absorber attached to the wheel is also shown. The path of motion is shown as vertically up and down.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/a202a3c91af5c99d4f1bcfd143424e9d65a36f71)

Figure 23.49 The forced but damped motion of the wheel on the car spring is analogous to an _RLC_ series AC circuit. The shock absorber damps the motion and dissipates energy, analogous to the resistance in an _RLC_ circuit. The mass and spring determine the resonant frequency.

A pure _LC_ circuit with negligible resistance oscillates at f0f0, the same resonant frequency as an _RLC_ circuit. It can serve as a frequency standard or clock circuit—for example, in a digital wristwatch. With a very small resistance, only a very small energy input is necessary to maintain the oscillations. The circuit is analogous to a car with no shock absorbers. Once it starts oscillating, it continues at its natural frequency for some time. [Figure 23.50](23-12-rlc-series-ac-circuits#import-auto-id1169738257733) shows the analogy between an _LC_ circuit and a mass on a spring.

![The figure describes four stages of an L C oscillation circuit compared to a mass oscillating on a spring. Part a of the figure shows a mass attached to a horizontal spring. The spring is attached to a fixed support on the left. The mass is at rest as shown by velocity v equals zero. The energy of the spring is shown as potential energy. This is compared with a circuit containing a capacitor C and inductor L connected together. The energy is shown as stored in the electric field E of the capacitor between the plates. One plate is shown to have a negative polarity and other plate is shown to have a positive polarity. Part b of the figure shows a mass attached to a horizontal spring which is attached to a fixed support on the left. The mass is shown to move horizontal toward the fixed support with velocity v. The energy here is stored as the kinetic energy of the spring. This is compared with a circuit containing a capacitor C and inductor L connected together. A current is shown in the circuit and energy is stored as magnetic field B in the inductor. Part c of the figure shows a mass attached to a horizontal spring which is attached to a fixed support on the left. The spring is shown as not stretched and the energy is shown as potential energy of the spring. The mass is show to have displaced toward left. This is compared with a circuit containing a capacitor C and inductor L connected together. The energy is shown as stored in the electric field E of the capacitor between the plates. One plate is shown to have a negative polarity and other plate is shown to have a positive polarity. But the polarities are reverse of the first case in part a. Part d of the figure shows a mass attached to a horizontal spring which is attached to a fixed support on the left. The mass is shown to move toward right with velocity v. the energy of the spring is kinetic energy. This is compared with a circuit containing a capacitor C and inductor L connected together. A current is shown in the circuit opposite to that in part b and energy is stored as magnetic field B in the inductor.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/f704685e9f9a689f1b8c4ee2aea79880da3b8a2e)

Figure 23.50 An _LC_ circuit is analogous to a mass oscillating on a spring with no friction and no driving force. Energy moves back and forth between the inductor and capacitor, just as it moves from kinetic to potential in the mass-spring system.

#### Circuit Construction Kit (AC+DC), Virtual Lab

Build circuits with capacitors, inductors, resistors and AC or DC voltage sources, and inspect them using lab instruments such as voltmeters and ammeters.

[Access multimedia content](http://openstax.org/books/college-physics-2e/pages/23-12-rlc-series-ac-circuits)