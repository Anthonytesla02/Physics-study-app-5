# 20.5 Alternating Current versus Direct Current

[Original URL](https://openstax.org/books/college-physics-2e/pages/20-5-alternating-current-versus-direct-current)

## 20.5 Alternating Current versus Direct Current

### Learning Objectives

By the end of this section, you will be able to:

*   Explain the differences and similarities between AC and DC current.
*   Calculate rms voltage, current, and average power.
*   Explain why AC current is used for power transmission.

### Alternating Current

Most of the examples dealt with so far, and particularly those utilizing batteries, have constant voltage sources. Once the current is established, it is thus also a constant. Direct current (DC) is the flow of electric charge in only one direction. It is the steady state of a constant-voltage circuit. Most well-known applications, however, use a time-varying voltage source. Alternating current (AC) is the flow of electric charge that periodically reverses direction. If the source varies periodically, particularly sinusoidally, the circuit is known as an alternating current circuit. Examples include the commercial and residential power that serves so many of our needs. [Figure 20.14](20-5-alternating-current-versus-direct-current#import-auto-id3037356) shows graphs of voltage and current versus time for typical DC and AC power. The AC voltages and frequencies commonly used in homes and businesses vary around the world.

\[missing\_resource: ../../media/Figure\_21\_05\_0jpg\]

Figure 20.14 (a) DC voltage and current are constant in time, once the current is established. (b) A graph of voltage and current versus time for 60-Hz AC power. The voltage and current are sinusoidal and are in phase for a simple resistance circuit. The frequencies and peak voltages of AC sources differ greatly.

![The potential difference variation of an alternating current voltage source with time is shown as a progressing sine wave. The voltage is shown along the vertical axis and the time is along the horizontal axis. Circuit diagrams show that current flowing in one direction corresponds to positive values of the voltage sine wave. Current flowing in the opposite direction in the circuit corresponds to negative values of the voltage sine wave. The maximum value of the voltage sine wave is plus V sub zero. The minimum value of the voltage sine wave is minus V sub zero.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/05a1c4599e6cdce3542a2df726041ee5ba969ce5)

Figure 20.15 The potential difference VV between the terminals of an AC voltage source fluctuates as shown. The mathematical expression for VV is given by V\=V0sin 2 πftV\=V0sin 2 πft.

[Figure 20.15](20-5-alternating-current-versus-direct-current#import-auto-id2808768) shows a schematic of a simple circuit with an AC voltage source. The voltage between the terminals fluctuates as shown, with the AC voltage given by

V\=V0sin 2πft,V\=V0sin 2πft,

20.38

where VV is the voltage at time tt_,_ V0V0 is the peak voltage, and ff is the frequency in hertz. For this simple resistance circuit, I\=V/RI\=V/R, and so the AC current is

I\=I0 sin 2πft,I\=I0 sin 2πft,

20.39

where II is the current at time tt, and I0\=V0/RI0\=V0/R is the peak current. For this example, the voltage and current are said to be in phase, as seen in [Figure 20.14](20-5-alternating-current-versus-direct-current#import-auto-id3037356)(b).

Current in the resistor alternates back and forth just like the driving voltage, since I\=V/RI\=V/R. If the resistor is a fluorescent light bulb, for example, it brightens and dims 120 times per second as the current repeatedly goes through zero. A 120-Hz flicker is too rapid for your eyes to detect, but if you wave your hand back and forth between your face and a fluorescent light, you will see a stroboscopic effect evidencing AC. The fact that the light output fluctuates means that the power is fluctuating. The power supplied is P\=IVP\=IV. Using the expressions for II and VV above, we see that the time dependence of power is P\=I0V0sin2 2πftP\=I0V0sin2 2πft, as shown in [Figure 20.16](20-5-alternating-current-versus-direct-current#import-auto-id1219206).

Wave your hand back and forth between your face and a fluorescent light bulb. Do you observe the same thing with the headlights on your car? Explain what you observe. _Warning: Do not look directly at very bright light_.

![A graph showing the variation of power P with time t. The power is along the vertical axis and time is along the horizontal axis. The curve is a sine wave starting at the origin on the horizontal axis and having the crests and troughs both above the positive horizontal axis. The maximum value of power is given by the peak value, which is the product of I sub zero and V sub zero. The average power is indicated by a dotted line through the center of the wave parallel to the horizontal axis with a value half of the product of I sub zero and V sub zero.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e3b3edad39ba3de232bef0b175e3825d599ebf37)

Figure 20.16 AC power as a function of time. Since the voltage and current are in phase here, their product is non-negative and fluctuates between zero and I0V0I0V0. Average power is (1/2)I0V0(1/2)I0V0.

We are most often concerned with average power rather than its fluctuations—that 60-W light bulb in your desk lamp has an average power consumption of 60 W, for example. As illustrated in [Figure 20.16](20-5-alternating-current-versus-direct-current#import-auto-id1219206), the average power PavePave is

Pave\=12I0V0.Pave\=12I0V0.

20.40

This is evident from the graph, since the areas above and below the (1/2)I0V0(1/2)I0V0 line are equal, but it can also be proven using trigonometric identities. Similarly, we define an average or rms current IrmsIrms and average or rms voltage VrmsVrms to be, respectively,

I rms \= I 0 2 I rms \= I 0 2

20.41

and

Vrms \=V02.Vrms \=V02.

20.42

where rms stands for root mean square, a particular kind of average. In general, to obtain a root mean square, the particular quantity is squared, its mean (or average) is found, and the square root is taken. This is useful for AC, since the average value is zero. Now,

Pave\=IrmsVrms,Pave\=IrmsVrms,

20.43

which gives

Pave\=I02⋅V02\=12I0V0,Pave\=I02⋅V02\=12I0V0,

20.44

as stated above. It is standard practice to quote IrmsIrms, VrmsVrms, and PavePave rather than the peak values. For example, most household electricity is 120 V AC, which means that VrmsVrms is 120 V. The common 10-A circuit breaker will interrupt a sustained IrmsIrms greater than 10 A. Your 1.0-kW microwave oven consumes Pave\=1.0 kWPave\=1.0 kW, and so on. You can think of these rms and average values as the equivalent DC values for a simple resistive circuit.

To summarize, when dealing with AC, Ohm’s law and the equations for power are completely analogous to those for DC, but rms and average values are used for AC. Thus, for AC, Ohm’s law is written

Irms\=VrmsR.Irms\=VrmsR.

20.45

The various expressions for AC power PavePave are

Pave\=IrmsVrms,Pave\=IrmsVrms,

20.46

Pave\=Vrms2R,Pave\=Vrms2R,

20.47

and

Pave\=Irms2R.Pave\=Irms2R.

20.48

#### Peak Voltage and Power for AC

(a) What is the value of the peak voltage for 120-V AC power? (b) What is the peak power consumption rate of a 60.0-W AC light bulb?

#### Strategy

We are told that VrmsVrms is 120 V and PavePave is 60.0 W. We can use Vrms \=V02Vrms \=V02 to find the peak voltage, and we can manipulate the definition of power to find the peak power from the given average power.

#### Solution for (a)

Solving the equation Vrms \=V02Vrms \=V02 for the peak voltage V0V0 and substituting the known value for VrmsVrms gives

V0\=2Vrms\= 1.414(120 V)\= 170 V.V0\=2Vrms\= 1.414(120 V)\= 170 V.

20.49

#### Discussion for (a)

This means that the AC voltage swings from 170 V to –170 V–170 V and back 60 times every second. An equivalent DC voltage is a constant 120 V.

#### Solution for (b)

Peak power is peak current times peak voltage. Thus,

P0\=I0V0\= 212I0V0\= 2Pave.P0\=I0V0\= 212I0V0\= 2Pave.

20.50

We know the average power is 60.0 W, and so

P0\= 2(60.0 W)\= 120 W.P0\= 2(60.0 W)\= 120 W.

20.51

#### Discussion

So the power swings from zero to 120 W one hundred twenty times per second (twice each cycle), and the power averages 60 W.

### Why Use AC for Power Distribution?

Most large power-distribution systems are AC. Moreover, the power is transmitted at much higher voltages than the 120-V AC (240 V in most parts of the world) we use in homes and on the job. Economies of scale make it cheaper to build a few very large electric power-generation plants than to build numerous small ones. This necessitates sending power long distances, and it is obviously important that energy losses en route be minimized. High voltages can be transmitted with much smaller power losses than low voltages, as we shall see. (See [Figure 20.17](20-5-alternating-current-versus-direct-current#import-auto-id2735185).) For safety reasons, the voltage at the user is reduced to familiar values. The crucial factor is that it is much easier to increase and decrease AC voltages than DC, so AC is used in most large power distribution systems.

![Photograph of transformers installed in transmission lines.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e17a4a800a99e527a7d294c0ac99e2e769360698)

Figure 20.17 Power is distributed over large distances at high voltage to reduce power loss in the transmission lines. The voltages generated at the power plant are stepped up by passive devices called transformers (see [Transformers](23-7-transformers)) to 330,000 volts (or more in some places worldwide). At the point of use, the transformers reduce the voltage transmitted for safe residential and commercial use. (Credit: GeorgHH, Wikimedia Commons)

#### Power Losses Are Less for High-Voltage Transmission

(a) What current is needed to transmit 100 MW of power at 200 kV? (b) What is the power dissipated by the transmission lines if they have a resistance of 1.00Ω1.00Ω? (c) What percentage of the power is lost in the transmission lines?

#### Strategy

We are given Pave\=100 MWPave\=100 MW, Vrms\=200 kVVrms\=200 kV, and the resistance of the lines is R\=1.00ΩR\=1.00Ω. Using these givens, we can find the current flowing (from P\=IVP\=IV) and then the power dissipated in the lines (P\=I2RP\=I2R), and we take the ratio to the total power transmitted.

#### Solution

To find the current, we rearrange the relationship Pave\=IrmsVrmsPave\=IrmsVrms and substitute known values. This gives

Irms\=PaveVrms\=100 × 106 W200 × 103 V\= 500 A.Irms\=PaveVrms\=100 × 106 W200 × 103 V\= 500 A.

20.52

#### Solution

Knowing the current and given the resistance of the lines, the power dissipated in them is found from Pave\=Irms2RPave\=Irms2R. Substituting the known values gives

Pave\=Irms2R\=(500 A)2(1.00 Ω)\= 250 kW.Pave\=Irms2R\=(500 A)2(1.00 Ω)\= 250 kW.

20.53

#### Solution

The percent loss is the ratio of this lost power to the total or input power, multiplied by 100:

% loss=250 kW100 MW×100\=0.250 %.% loss=250 kW100 MW×100\=0.250 %.

20.54

#### Discussion

One-fourth of a percent is an acceptable loss. Note that if 100 MW of power had been transmitted at 25 kV, then a current of 4000 A would have been needed. This would result in a power loss in the lines of 16.0 MW, or 16.0% rather than 0.250%. The lower the voltage, the more current is needed, and the greater the power loss in the fixed-resistance transmission lines. Of course, lower-resistance lines can be built, but this requires larger and more expensive wires. If superconducting lines could be economically produced, there would be no loss in the transmission lines at all. But, as we shall see in a later chapter, there is a limit to current in superconductors, too. In short, high voltages are more economical for transmitting power, and AC voltage is much easier to raise and lower, so that AC is used in most large-scale power distribution systems.

It is widely recognized that high voltages pose greater hazards than low voltages. But, in fact, some high voltages, such as those associated with common static electricity, can be harmless. So it is not voltage alone that determines a hazard. It is not so widely recognized that AC shocks are often more harmful than similar DC shocks. Thomas Edison thought that AC shocks were more harmful and set up a DC power-distribution system in New York City in the late 1800s. There were bitter fights, in particular between Edison and George Westinghouse and Nikola Tesla, who were advocating the use of AC in early power-distribution systems. AC has prevailed largely due to transformers and lower power losses with high-voltage transmission.

#### Generator

Generate electricity with a bar magnet! Discover the physics behind the phenomena by exploring magnets and how you can use them to make a bulb light.

[Click to view content](https://openstax.org/l/28gen).