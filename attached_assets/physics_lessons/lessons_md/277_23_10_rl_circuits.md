# 23.10 RL Circuits

[Original URL](https://openstax.org/books/college-physics-2e/pages/23-10-rl-circuits)

## 23.10 RL Circuits

### Learning Objectives

By the end of this section, you will be able to:

*   Calculate the current in an RL circuit after a specified number of characteristic time steps.
*   Calculate the characteristic time of an RL circuit.
*   Sketch the current in an RL circuit over time.

We know that the current through an inductor LL cannot be turned on or off instantaneously. The change in current changes flux, inducing an emf opposing the change (Lenz’s law). How long does the opposition last? Current _will_ flow and _can_ be turned off, but how long does it take? [Figure 23.42](23-10-rl-circuits#import-auto-id1169737969272) shows a switching circuit that can be used to examine current through an inductor as a function of time.

![Part a of the figure shows an inductor connected in series with a resistor. The arrangement is connected across a cell by an on and off switch with two positions. When in position one, the battery, resistor, and inductor are in series and a current is established. In position two, the battery is removed and the current stops eventually because of energy loss in the resistor. Part b of the diagram shows the graph when the switch is in position one. It shows a graph for current growth verses time. The current is along the Y axis and the time is along the X axis. The graph shows a smooth rise from origin to a maximum value I zero corresponding to Y axis and value four tau on X axis. Part c of the diagram shows the graph when the switch is in position two. It shows a graph for current decay verses time is shown. The current is along the Y axis and the time is along the X axis. The graph is decreasing curve from a value I zero on Y axis, touching the X axis at a point where value of time equals four tau.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/52cb8bddb8bb83b2be1843f7df7207a45a6893cf)

Figure 23.42 (a) An _RL_ circuit with a switch to turn current on and off. When in position 1, the battery, resistor, and inductor are in series and a current is established. In position 2, the battery is removed and the current eventually stops because of energy loss in the resistor. (b) A graph of current growth versus time when the switch is moved to position 1. (c) A graph of current decay when the switch is moved to position 2.

When the switch is first moved to position 1 (at _t\=0t\=0_), the current is zero and it eventually rises to I0\=V/RI0\=V/R, where R R is the total resistance of the circuit. The opposition of the inductor LL is greatest at the beginning, because the amount of change is greatest. The opposition it poses is in the form of an induced emf, which decreases to zero as the current approaches its final value. The opposing emf is proportional to the amount of change left. This is the hallmark of an exponential behavior, and it can be shown with calculus that

I\=I0(1−e−t/τ)    (turning on),I\=I0(1−e−t/τ)    (turning on),

23.45

is the current in an _RL_ circuit when switched on (Note the similarity to the exponential behavior of the voltage on a charging capacitor). The initial current is zero and approaches I0\=V/RI0\=V/R with a characteristic time constant τ τ for an _RL_ circuit, given by

τ\=LR,τ\=LR,

23.46

where ττ has units of seconds, since 1 H \= 1 Ω · s 1 H \= 1 Ω · s . In the first period of time ττ, the current rises from zero to 0.632I00.632I0, since I\=I0(1−e−1)\=I0(1−0.368)\=0.632I0I\=I0(1−e−1)\=I0(1−0.368)\=0.632I0. The current will go 0.632 of the remainder in the next time ττ. A well-known property of the exponential is that the final value is never exactly reached, but 0.632 of the remainder to that value is achieved in every characteristic time ττ. In just a few multiples of the time ττ, the final value is very nearly achieved, as the graph in [Figure 23.42](23-10-rl-circuits#import-auto-id1169737969272)(b) illustrates.

The characteristic time ττ depends on only two factors, the inductance LL and the resistance RR. The greater the inductance LL, the greater ττ is, which makes sense since a large inductance is very effective in opposing change. The smaller the resistance RR, the greater ττ is. Again this makes sense, since a small resistance means a large final current and a greater change to get there. In both cases—large LL and small RR —more energy is stored in the inductor and more time is required to get it in and out.

When the switch in [Figure 23.42](23-10-rl-circuits#import-auto-id1169737969272)(a) is moved to position 2 and cuts the battery out of the circuit, the current drops because of energy dissipation by the resistor. But this is also not instantaneous, since the inductor opposes the decrease in current by inducing an emf in the same direction as the battery that drove the current. Furthermore, there is a certain amount of energy, (1/2)LI02(1/2)LI02, stored in the inductor, and it is dissipated at a finite rate. As the current approaches zero, the rate of decrease slows, since the energy dissipation rate is I2RI2R. Once again the behavior is exponential, and II is found to be

I\=I0e−t/τ    (turning off).I\=I0e−t/τ    (turning off).

23.47

(See [Figure 23.42](23-10-rl-circuits#import-auto-id1169737969272)(c).) In the first period of time τ\=L/Rτ\=L/R after the switch is closed, the current falls to 0.368 of its initial value, since I\=I0e−1\=0.368I0I\=I0e−1\=0.368I0. In each successive time ττ, the current falls to 0.368 of the preceding value, and in a few multiples of ττ, the current becomes very close to zero, as seen in the graph in [Figure 23.42](23-10-rl-circuits#import-auto-id1169737969272)(c).

#### Calculating Characteristic Time and Current in an _RL_ Circuit

(a) What is the characteristic time constant for a 7.50 mH inductor in series with a 3.00 Ω 3.00 Ω resistor? (b) Find the current 5.00 ms after the switch is moved to position 2 to disconnect the battery, if it is initially 10.0 A.

#### Strategy for (a)

The time constant for an _RL_ circuit is defined by τ\=L/Rτ\=L/R.

#### Solution for (a)

Entering known values into the expression for ττ given in τ\=L/Rτ\=L/R yields

τ\=LR\=7.50 mH3.00Ω\=2.50 ms.τ\=LR\=7.50 mH3.00Ω\=2.50 ms.

23.48

#### Discussion for (a)

This is a small but definitely finite time. The coil will be very close to its full current in about ten time constants, or about 25 ms.

#### Strategy for (b)

We can find the current by using I\=I0e−t/τI\=I0e−t/τ, or by considering the decline in steps. Since the time is twice the characteristic time, we consider the process in steps.

#### Solution for (b)

In the first 2.50 ms, the current declines to 0.368 of its initial value, which is

I \= 0.368I0\=(0.368)(10.0 A) \= 3.68 A at t\=2.50 ms. I \= 0.368I0\=(0.368)(10.0 A) \= 3.68 A at t\=2.50 ms.

23.49

After another 2.50 ms, or a total of 5.00 ms, the current declines to 0.368 of the value just found. That is,

I′ \= 0.368I\=(0.368)(3.68 A) \= 1.35 A at t\=5.00 ms.I′ \= 0.368I\=(0.368)(3.68 A) \= 1.35 A at t\=5.00 ms.

23.50

#### Discussion for (b)

After another 5.00 ms has passed, the current will be 0.183 A (see [Exercise 23.69](23-problems-exercises)); so, although it does die out, the current certainly does not go to zero instantaneously.

In summary, when the voltage applied to an inductor is changed, the current also changes, _but the change in current lags the change in voltage in an RL circuit_. In [Reactance, Inductive and Capacitive](23-11-reactance-inductive-and-capacitive), we explore how an _RL_ circuit behaves when a sinusoidal AC voltage is applied.