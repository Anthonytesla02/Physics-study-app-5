# 19.6 Capacitors in Series and Parallel

[Original URL](https://openstax.org/books/college-physics-2e/pages/19-6-capacitors-in-series-and-parallel)

## 19.6 Capacitors in Series and Parallel

### Learning Objectives

By the end of this section, you will be able to:

*   Derive expressions for total capacitance in series and in parallel.
*   Identify series and parallel parts in the combination of connection of capacitors.
*   Calculate the effective capacitance in series and parallel given individual capacitances.

Several capacitors may be connected together in a variety of applications. Multiple connections of capacitors act like a single equivalent capacitor. The total capacitance of this equivalent single capacitor depends both on the individual capacitors and how they are connected. There are two simple and common types of connections, called _series_ and _parallel_, for which we can easily calculate the total capacitance. Certain more complicated connections can also be related to combinations of series and parallel.

### Capacitance in Series

[Figure 19.19](19-6-capacitors-in-series-and-parallel#import-auto-id2499137)(a) shows a series connection of three capacitors with a voltage applied. As for any capacitor, the capacitance of the combination is related to charge and voltage by C\=QVC\=QV.

Note in [Figure 19.19](19-6-capacitors-in-series-and-parallel#import-auto-id2499137) that opposite charges of magnitude QQ flow to either side of the originally uncharged combination of capacitors when the voltage VV is applied. Conservation of charge requires that equal-magnitude charges be created on the plates of the individual capacitors, since charge is only being separated in these originally neutral devices. The end result is that the combination resembles a single capacitor with an effective plate separation greater than that of the individual capacitors alone. (See [Figure 19.19](19-6-capacitors-in-series-and-parallel#import-auto-id2499137)(b).) Larger plate separation means smaller capacitance. It is a general feature of series connections of capacitors that the total capacitance is less than any of the individual capacitances.

![When capacitors are connected in series, an equivalent capacitor would have a plate separation that is greater than that of any individual capacitor. Hence the series connections produce a resultant capacitance less than that of the individual capacitors.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/85d689529637717d713c8c5aaaf3edfea82d340e)

Figure 19.19 (a) Capacitors connected in series. The magnitude of the charge on each plate is Q Q. (b) An equivalent capacitor has a larger plate separation dd. Series connections produce a total capacitance that is less than that of any of the individual capacitors.

We can find an expression for the total capacitance by considering the voltage across the individual capacitors shown in [Figure 19.19](19-6-capacitors-in-series-and-parallel#import-auto-id2499137). Solving C\=QVC\=QV for VV gives V\=QCV\=QC. The voltages across the individual capacitors are thus V1\=QC1V1\=QC1, V2\=QC2V2\=QC2, and V3\=QC3V3\=QC3. The total voltage is the sum of the individual voltages:

V\=V1+V2+V3.V\=V1+V2+V3.

19.60

Now, calling the total capacitance CSCS for series capacitance, consider that

V \= Q C S \= V 1 + V 2 + V 3 . V \= Q C S \= V 1 + V 2 + V 3 .

19.61

Entering the expressions for V1V1, V2V2, and V3V3, we get

QCS\=QC1+QC2+QC3.QCS\=QC1+QC2+QC3.

19.62

Canceling the QQs, we obtain the equation for the total capacitance in series CSCS to be

1CS\=1C1+1C2+1C3+...,1CS\=1C1+1C2+1C3+...,

19.63

where “...” indicates that the expression is valid for any number of capacitors connected in series. An expression of this form always results in a total capacitance CSCS that is less than any of the individual capacitances C1C1, C2C2, ..., as the next example illustrates.

Total capacitance in series: 1CS\=1C1+1C2+1C3+...1CS\=1C1+1C2+1C3+...

#### What Is the Series Capacitance?

Find the total capacitance for three capacitors connected in series, given their individual capacitances are 1.000, 5.000, and 8.000 µFµF.

#### Strategy

With the given information, the total capacitance can be found using the equation for capacitance in series.

#### Solution

Entering the given capacitances into the expression for 1CS1CS gives 1CS\=1C1+1C2+1C31CS\=1C1+1C2+1C3.

1 C S \= 1 1 . 000 µF + 1 5 . 000 µF + 1 8 . 000 µF \= 1 . 325 µF 1 C S \= 1 1 . 000 µF + 1 5 . 000 µF + 1 8 . 000 µF \= 1 . 325 µF

19.64

Inverting to find CSCS yields CS\=µF1.325\=0.755 µFCS\=µF1.325\=0.755 µF.

#### Discussion

The total series capacitance CsCs is less than the smallest individual capacitance, as promised. In series connections of capacitors, the sum is less than the parts. In fact, it is less than any individual. Note that it is sometimes possible, and more convenient, to solve an equation like the above by finding the least common denominator, which in this case (showing only whole-number calculations) is 40. Thus,

1CS\=4040 µF+840 µF+540 µF\=5340 µF,1CS\=4040 µF+840 µF+540 µF\=5340 µF,

19.65

so that

CS\=40 µF53\=0.755 µF.CS\=40 µF53\=0.755 µF.

19.66

### Capacitors in Parallel

[Figure 19.20](19-6-capacitors-in-series-and-parallel#import-auto-id2511423)(a) shows a parallel connection of three capacitors with a voltage applied. Here the total capacitance is easier to find than in the series case. To find the equivalent total capacitance CpCp, we first note that the voltage across each capacitor is VV, the same as that of the source, since they are connected directly to it through a conductor. (Conductors are equipotentials, and so the voltage across the capacitors is the same as that across the voltage source.) Thus the capacitors have the same charges on them as they would have if connected individually to the voltage source. The total charge QQ is the sum of the individual charges:

Q\=Q1+Q2+Q3.Q\=Q1+Q2+Q3.

19.67

![Part a of the figure shows three capacitors connected in parallel to each other and to the applied voltage. The total capacitance when they are connected in parallel is simply the sum of the individual capacitances. Part b of the figure shows the larger equivalent plate area of the capacitors connected in parallel, which in turn can hold more charge than the individual capacitors.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/e02da723ce0267241c1f51d1c00bcd02ca99d08b)

Figure 19.20 (a) Capacitors in parallel. Each is connected directly to the voltage source just as if it were all alone, and so the total capacitance in parallel is just the sum of the individual capacitances. (b) The equivalent capacitor has a larger plate area and can therefore hold more charge than the individual capacitors.

Using the relationship Q\=CVQ\=CV, we see that the total charge is Q\=CpVQ\=CpV, and the individual charges are Q1\=C1VQ1\=C1V_,_ Q2\=C2VQ2\=C2V_,_ and Q3\=C3VQ3\=C3V. Entering these into the previous equation gives

CpV\=C1V+C2V+C3V.CpV\=C1V+C2V+C3V.

19.68

Canceling VV from the equation, we obtain the equation for the total capacitance in parallel CpCp:

Cp\=C1+C2+C3+....Cp\=C1+C2+C3+....

19.69

Total capacitance in parallel is simply the sum of the individual capacitances. (Again the “_..._” indicates the expression is valid for any number of capacitors connected in parallel.) So, for example, if the capacitors in the example above were connected in parallel, their capacitance would be

Cp\=1.000 µF+5.000 µF+8.000 µF\=14.000 µF.Cp\=1.000 µF+5.000 µF+8.000 µF\=14.000 µF.

19.70

The equivalent capacitor for a parallel connection has an effectively larger plate area and, thus, a larger capacitance, as illustrated in [Figure 19.20](19-6-capacitors-in-series-and-parallel#import-auto-id2511423)(b).

Total capacitance in parallel Cp\=C1+C2+C3+...Cp\=C1+C2+C3+...

More complicated connections of capacitors can sometimes be combinations of series and parallel. (See [Figure 19.21](19-6-capacitors-in-series-and-parallel#import-auto-id2506336).) To find the total capacitance of such combinations, we identify series and parallel parts, compute their capacitances, and then find the total.

![The first figure has two capacitors, C sub1 and C sub2 in series and the third capacitor C sub 3 is parallel to C sub 1 and C sub 2. The second figure shows C sub S, the equivalent capacitance of C sub 1 and C sub 2, in parallel to C sub 3. The third figure represents the total capacitance of C sub S and C sub 3.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/f71ce162e90049c07d35b442748ce1fc8439a614)

Figure 19.21 (a) This circuit contains both series and parallel connections of capacitors. See [Example 19.10](19-6-capacitors-in-series-and-parallel#fs-id1327996) for the calculation of the overall capacitance of the circuit. (b) C1C1 and C2C2 are in series; their equivalent capacitance CSCS is less than either of them. (c) Note that CSCS is in parallel with C3C3. The total capacitance is, thus, the sum of CSCS and C3C3.

#### A Mixture of Series and Parallel Capacitance

Find the total capacitance of the combination of capacitors shown in [Figure 19.21](19-6-capacitors-in-series-and-parallel#import-auto-id2506336). Assume the capacitances in [Figure 19.21](19-6-capacitors-in-series-and-parallel#import-auto-id2506336) are known to three decimal places ( C1\=1.000 µFC1\=1.000 µF, C2\=5.000 µFC2\=5.000 µF, and C3\=8.000 µFC3\=8.000 µF), and round your answer to three decimal places.

#### Strategy

To find the total capacitance, we first identify which capacitors are in series and which are in parallel. Capacitors C1C1 and C2C2 are in series. Their combination, labeled CSCS in the figure, is in parallel with C3C3.

#### Solution

Since C1C1 and C2C2 are in series, their total capacitance is given by 1CS\=1C1+1C2+1C31CS\=1C1+1C2+1C3. Entering their values into the equation gives

1 C S \= 1 C 1 + 1 C 2 \= 1 1 . 000 μF + 1 5 . 000 μF \= 1 . 200 μF . 1 C S \= 1 C 1 + 1 C 2 \= 1 1 . 000 μF + 1 5 . 000 μF \= 1 . 200 μF .

19.71

Inverting gives

CS\=0.833 µF.CS\=0.833 µF.

19.72

This equivalent series capacitance is in parallel with the third capacitor; thus, the total is the sum

C tot \= C S + C 3 \= 0.833 μF + 8.000 μF \= 8.833 μF. C tot \= C S + C 3 \= 0.833 μF + 8.000 μF \= 8.833 μF.

19.73

#### Discussion

This technique of analyzing the combinations of capacitors piece by piece until a total is obtained can be applied to larger combinations of capacitors.