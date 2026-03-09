# 23.11 Reactance, Inductive and Capacitive

[Original URL](https://openstax.org/books/college-physics-2e/pages/23-11-reactance-inductive-and-capacitive)

## 23.11 Reactance, Inductive and Capacitive

### Learning Objectives

By the end of this section, you will be able to:

*   Sketch voltage and current versus time in simple inductive, capacitive, and resistive circuits.
*   Calculate inductive and capacitive reactance.
*   Calculate current and/or voltage in simple inductive, capacitive, and resistive circuits.

Many circuits also contain capacitors and inductors, in addition to resistors and an AC voltage source. We have seen how capacitors and inductors respond to DC voltage when it is switched on and off. We will now explore how inductors and capacitors react to sinusoidal AC voltage.

### Inductors and Inductive Reactance

Suppose an inductor is connected directly to an AC voltage source, as shown in [Figure 23.43](23-11-reactance-inductive-and-capacitive#import-auto-id1169736696969). It is reasonable to assume negligible resistance, since in practice we can make the resistance of an inductor so small that it has a negligible effect on the circuit. Also shown is a graph of voltage and current as functions of time.

![Part a of the figure describes an A C voltage source V connected across an inductor L. The voltage across the inductance is shown as V L. Part b of the figure describes a graph showing the variation of current and voltage across the inductance as a function of time. The voltage V L and current I L is plotted along the Y axis and the time t is along the X axis. The graph for current is a progressive sine wave from the origin. The graph for voltage V is a cosine wave and an amplitude slightly less than the current wave.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/72281b61b8ae14718df6a3c8b98e2f0f50842cd0)

Figure 23.43 (a) An AC voltage source in series with an inductor having negligible resistance. (b) Graph of current and voltage across the inductor as functions of time.

The graph in [Figure 23.43](23-11-reactance-inductive-and-capacitive#import-auto-id1169736696969)(b) starts with voltage at a maximum. Note that the current starts at zero and rises to its peak _after_ the voltage that drives it, just as was the case when DC voltage was switched on in the preceding section. When the voltage becomes negative at point a, the current begins to decrease; it becomes zero at point b, where voltage is its most negative. The current then becomes negative, again following the voltage. The voltage becomes positive at point c and begins to make the current less negative. At point d, the current goes through zero just as the voltage reaches its positive peak to start another cycle. This behavior is summarized as follows:

When a sinusoidal voltage is applied to an inductor, the voltage leads the current by one-fourth of a cycle, or by a 90º 90º phase angle.

Current lags behind voltage, since inductors oppose change in current. Changing current induces a back emf V\=−L(ΔI/Δt)V\=−L(ΔI/Δt). This is considered to be an effective resistance of the inductor to AC. The rms current II through an inductor LL is given by a version of Ohm’s law:

I\=VXL,I\=VXL,

23.51

where V V is the rms voltage across the inductor and XLXL is defined to be

XL\=2πfL,XL\=2πfL,

23.52

with ff the frequency of the AC voltage source in hertz (An analysis of the circuit using Kirchhoff’s loop rule and calculus actually produces this expression). XLXL is called the inductive reactance, because the inductor reacts to impede the current. XLXL has units of ohms (1 H\=1 Ω⋅s1 H\=1 Ω⋅s, so that frequency times inductance has units of (cycles/s)(Ω⋅s)\=Ω(cycles/s)(Ω⋅s)\=Ω), consistent with its role as an effective resistance. It makes sense that XLXL is proportional to LL, since the greater the induction the greater its resistance to change. It is also reasonable that XLXL is proportional to frequency ff, since greater frequency means greater change in current. That is, ΔI/ΔtΔI/Δt is large for large frequencies (large ff_,_ small ΔtΔt). The greater the change, the greater the opposition of an inductor.

#### Calculating Inductive Reactance and then Current

(a) Calculate the inductive reactance of a 3.00 mH inductor when 60.0 Hz and 10.0 kHz AC voltages are applied. (b) What is the rms current at each frequency if the applied rms voltage is 120 V?

#### Strategy

The inductive reactance is found directly from the expression XL\=2πfLXL\=2πfL. Once XLXL has been found at each frequency, Ohm’s law as stated in the Equation I\=V/XLI\=V/XL can be used to find the current at each frequency.

#### Solution for (a)

Entering the frequency and inductance into Equation XL\=2πfLXL\=2πfL gives

X L \= 2π fL \= 6.28 ( 60.0 / s ) ( 3.00 mH ) \= 1.13 Ω at 60 Hz . X L \= 2π fL \= 6.28 ( 60.0 / s ) ( 3.00 mH ) \= 1.13 Ω at 60 Hz .

23.53

Similarly, at 10 kHz,

XL\=2πfL\=6.28( 1.00 × 10 4 /s )(3.00 mH)\=188 Ω at 10 kHz.XL\=2πfL\=6.28( 1.00 × 10 4 /s )(3.00 mH)\=188 Ω at 10 kHz.

23.54

#### Solution for (b)

The rms current is now found using the version of Ohm’s law in Equation I\=V/XLI\=V/XL, given the applied rms voltage is 120 V. For the first frequency, this yields

I\=VXL\=120 V1.13 Ω\=106 A at 60 Hz.I\=VXL\=120 V1.13 Ω\=106 A at 60 Hz.

23.55

Similarly, at 10 kHz,

I\=VXL\=120 V188 Ω\=0.637 A at 10 kHz.I\=VXL\=120 V188 Ω\=0.637 A at 10 kHz.

23.56

#### Discussion

The inductor reacts very differently at the two different frequencies. At the higher frequency, its reactance is large and the current is small, consistent with how an inductor impedes rapid change. Thus high frequencies are impeded the most. Inductors can be used to filter out high frequencies; for example, a large inductor can be put in series with a sound reproduction system or in series with your home computer to reduce high-frequency sound output from your speakers or high-frequency power spikes into your computer.

Note that although the resistance in the circuit considered is negligible, the AC current is not extremely large because inductive reactance impedes its flow. With AC, there is no time for the current to become extremely large.

### Capacitors and Capacitive Reactance

Consider the capacitor connected directly to an AC voltage source as shown in [Figure 23.44](23-11-reactance-inductive-and-capacitive#import-auto-id1169738082254). The resistance of a circuit like this can be made so small that it has a negligible effect compared with the capacitor, and so we can assume negligible resistance. Voltage across the capacitor and current are graphed as functions of time in the figure.

![Part a of the figure shows a capacitor C connected across an A C voltage source V. The voltage across the capacitor is given by V C. Part b of the diagram shows a graph for the variation of current and voltage across the capacitor as functions of time. The voltage V C and current I C is plotted along the Y axis and the time t is along the X axis. The graph for current is a progressive sine wave from the origin starting with a wave along the negative Y axis. The graph for voltage is a cosine wave and amplitude slightly less than the current wave.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/57412cdda90a07b5056181ba1ff709758936046c)

Figure 23.44 (a) An AC voltage source in series with a capacitor _C_ having negligible resistance. (b) Graph of current and voltage across the capacitor as functions of time.

The graph in [Figure 23.44](23-11-reactance-inductive-and-capacitive#import-auto-id1169738082254) starts with voltage across the capacitor at a maximum. The current is zero at this point, because the capacitor is fully charged and halts the flow. Then voltage drops and the current becomes negative as the capacitor discharges. At point a, the capacitor has fully discharged (_Q\=0Q\=0_ on it) and the voltage across it is zero. The current remains negative between points a and b, causing the voltage on the capacitor to reverse. This is complete at point b, where the current is zero and the voltage has its most negative value. The current becomes positive after point b, neutralizing the charge on the capacitor and bringing the voltage to zero at point c, which allows the current to reach its maximum. Between points c and d, the current drops to zero as the voltage rises to its peak, and the process starts to repeat. Throughout the cycle, the voltage follows what the current is doing by one-fourth of a cycle:

When a sinusoidal voltage is applied to a capacitor, the voltage follows the current by one-fourth of a cycle, or by a 90º 90º phase angle.

The capacitor is affecting the current, having the ability to stop it altogether when fully charged. Since an AC voltage is applied, there is an rms current, but it is limited by the capacitor. This is considered to be an effective resistance of the capacitor to AC, and so the rms current II in the circuit containing only a capacitor CC is given by another version of Ohm’s law to be

I\=VXC,I\=VXC,

23.57

where VV is the rms voltage and XCXC is defined (As with XLXL, this expression for XCXC results from an analysis of the circuit using Kirchhoff’s rules and calculus) to be

XC\=12πfC,XC\=12πfC,

23.58

where XCXC is called the capacitive reactance, because the capacitor reacts to impede the current. XCXC has units of ohms (verification left as an exercise for the reader). XCXC is inversely proportional to the capacitance CC; the larger the capacitor, the greater the charge it can store and the greater the current that can flow. It is also inversely proportional to the frequency ff; the greater the frequency, the less time there is to fully charge the capacitor, and so it impedes current less.

#### Calculating Capacitive Reactance and then Current

(a) Calculate the capacitive reactance of a 5.00 µF capacitor when 60.0 Hz and 10.0 kHz AC voltages are applied. (b) What is the rms current if the applied rms voltage is 120 V?

#### Strategy

The capacitive reactance is found directly from the expression in XC\=12πfCXC\=12πfC. Once X C X C has been found at each frequency, Ohm’s law stated as I\=V/XCI\=V/XC can be used to find the current at each frequency.

#### Solution for (a)

Entering the frequency and capacitance into XC\=12πfCXC\=12πfC gives

XC \= 12πfC \= 16.28(60.0/s)(5.00 μF)\=531 Ω at 60 Hz. XC \= 12πfC \= 16.28(60.0/s)(5.00 μF)\=531 Ω at 60 Hz.

23.59

Similarly, at 10 kHz,

XC \= 12πfC\=16.28(1.00×104/s)(5.00 μF) \= 3.18 Ω at 10 kHz.XC \= 12πfC\=16.28(1.00×104/s)(5.00 μF) \= 3.18 Ω at 10 kHz.

23.60

#### Solution for (b)

The rms current is now found using the version of Ohm’s law in I\=V/XCI\=V/XC, given the applied rms voltage is 120 V. For the first frequency, this yields

I\=VXC\=120 V531 Ω\=0.226 A at 60 Hz.I\=VXC\=120 V531 Ω\=0.226 A at 60 Hz.

23.61

Similarly, at 10 kHz,

I\=VXC\=120 V3.18 Ω\=37.7 A at 10 kHz.I\=VXC\=120 V3.18 Ω\=37.7 A at 10 kHz.

23.62

#### Discussion

The capacitor reacts very differently at the two different frequencies, and in exactly the opposite way an inductor reacts. At the higher frequency, its reactance is small and the current is large. Capacitors favor change, whereas inductors oppose change. Capacitors impede low frequencies the most, since low frequency allows them time to become charged and stop the current. Capacitors can be used to filter out low frequencies. For example, a capacitor in series with a sound reproduction system rids it of the 60 Hz hum.

Although a capacitor is basically an open circuit, there is an rms current in a circuit with an AC voltage applied to a capacitor. This is because the voltage is continually reversing, charging and discharging the capacitor. If the frequency goes to zero (DC), XCXC tends to infinity, and the current is zero once the capacitor is charged. At very high frequencies, the capacitor’s reactance tends to zero—it has a negligible reactance and does not impede the current (it acts like a simple wire). _Capacitors have the opposite effect on AC circuits that inductors have_.

### Resistors in an AC Circuit

Just as a reminder, consider [Figure 23.45](23-11-reactance-inductive-and-capacitive#import-auto-id1169737758127), which shows an AC voltage applied to a resistor and a graph of voltage and current versus time. The voltage and current are exactly _in_ _phase_ in a resistor. There is no frequency dependence to the behavior of plain resistance in a circuit:

![Part a of the diagram shows a resistor R connected across an A C voltage source V. The voltage drop across the resistor R is given by V R.Part b of the diagram shows a graph showing the variation of voltage V R and current I R with time t. the V R and current I R are plotted along Y axis and time t is along the X axis. Both I and V are progressive cosine waves. The amplitude of I wave is more than V wave.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/b7964cb8dc096f11dffd907af0a9f45e70fa2a84)

Figure 23.45 (a) An AC voltage source in series with a resistor. (b) Graph of current and voltage across the resistor as functions of time, showing them to be exactly in phase.

When a sinusoidal voltage is applied to a resistor, the voltage is exactly in phase with the current—they have a 0º 0º phase angle.