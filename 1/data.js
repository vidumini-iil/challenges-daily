const data = [
  94809, 71482, 18312, 41024, 02033, 75324, 55249, 09829, 81776, 02624, 98765,
  28035, 05895, 19061, 08072, 49260, 19782, 69710, 04195, 41676, 25176, 30603,
  15291, 52066, 87977, 85291, 46956, 94888, 71057, 26406, 77541, 66341, 92074,
  82226, 78464, 83423, 06283, 68237, 59519, 47995, 14350, 63691, 39196, 35844,
  95161, 13176, 39985, 10747, 63641, 53171, 08695, 63530, 53560, 63616, 61761,
  76132, 25348, 44466, 55563, 10669, 98910, 17261, 81732, 23494, 11434, 51686,
  87467, 04263, 00207, 17131, 20845, 39993, 10425, 59256, 01135, 04127, 28007,
  01553, 14110, 70598, 37407, 71911, 32359, 52889, 04429, 54172, 60600, 68094,
  84033, 64701, 05991, 25986, 53154, 53942, 73448, 43075, 68514, 32987, 85948,
  81671, 49428, 25131, 29852, 13950, 85625, 42442, 25209, 11009, 70056, 87319,
  21072, 56939, 56706, 79054, 15813, 87877, 43408, 05398, 02431, 56076, 79656,
  99120, 38866, 18964, 99415, 39573, 43313, 53207, 78938, 79253, 14532, 93772,
  19572, 95363, 77164, 97989, 55577, 66376, 52041, 34615, 86935, 73597, 51496,
  97894, 37162, 27725, 99683, 46621, 36123, 20417, 77881, 68204, 27843, 00849,
  94812, 67728, 03318, 77279, 81952, 82016, 58332, 43610, 13843, 18689, 76264,
  30951, 53407, 20237, 35905, 84181, 22257, 53069, 44268, 63512, 96007, 21588,
  94400, 71049, 24592, 07244, 48198, 02355, 77573, 32602, 44218, 23013, 14454,
  50403, 30487, 70186, 79990, 57626, 22321, 79183, 24507, 34550, 85129, 35021,
  49206, 08817, 42234, 48984, 76481, 44497, 07680, 60191, 45230, 56146, 44046,
  62152, 31167, 47872, 45259, 54338, 92134, 77396, 44406, 18736, 38417, 45115,
  46548, 21417, 28054, 08163, 86529, 39097, 87148, 19477, 11792, 10697, 55185,
  91856, 90189, 13909, 55339, 87023, 42796, 66757, 89790, 29694, 01723, 54158,
  60031, 46630, 92930, 79489, 12188, 30711, 44034, 41144, 07327, 29988, 17126,
  34099, 16766, 61752, 66582, 76477, 42392, 51597, 21877, 61105, 61970, 97477,
  95394, 32081, 99457, 58773, 15241, 86335, 20311, 70355, 83058, 00193, 51811,
  81643, 56836, 80934, 28360, 20671, 58724, 43361, 61808, 83146, 07845, 11356,
  36753, 46518, 78105, 44447, 30864, 09034, 81010, 89369, 60186, 53807, 73476,
  56625, 49458, 37872, 90640, 22052, 27420, 06256, 03675, 53380, 47130, 31036,
  02603, 61798, 31276, 75401, 04103, 78513, 42485, 82716, 84330, 56313, 78639,
  90586, 36723, 96133, 93188, 69914, 54817, 98614, 40457, 88969, 40059, 40666,
  45967, 02444, 34618, 77031, 01740, 65522, 79200, 66847, 86615, 72934, 95855,
  25206, 11559, 23027, 95796, 99724, 89983, 06822, 12207, 72096, 33050, 22080,
  58060, 84661, 69989, 12361, 08921, 91966, 93409, 31090, 10767, 37329, 29611,
  30615, 12801, 54398, 33897, 76276, 25256, 93716, 10889, 85462, 02217, 74284,
  59836, 91673, 49427, 60120, 44928, 33589, 57101, 61828, 90610, 69126, 57742,
  63153, 01893, 14501, 08947, 72549, 09667, 08293, 01227, 99739, 41013, 00510,
  90812, 57277, 14517, 66645, 57470, 87114, 60579, 46744, 87315, 12154, 66731,
  09465, 80621, 12826, 47944, 41143, 84637, 28636, 41945, 59849, 51394, 84737,
  29525, 54458, 20522, 43489, 79855, 48705, 27063, 81021, 20799, 90253, 34278,
  88795, 34223, 64753, 91466, 00165, 76309, 34907, 16773, 41944, 22869, 04528,
  05004, 10966, 39657, 07607, 60439, 75644, 77679, 22374, 54640, 02537, 93509,
  10357, 09270, 07911, 94599, 80449, 03899, 34301, 09594, 77970, 08823, 52074,
  83641, 98726, 42869, 85994, 98703, 28074, 56216, 66778, 18875, 04986, 38201,
  07666, 60690, 11108, 50132, 05977, 88437, 84825, 83106, 69677, 34471, 60323,
  40815, 68938, 44524, 31652, 47362, 12702, 48023, 41786, 80071, 50242, 53396,
  96687, 27305, 97727, 68388, 04371, 71270, 89781, 45375, 38964, 95836, 56050,
  51670, 29769, 19343, 22760, 64845, 75328, 52417, 39283, 93035, 82482, 80784,
  29697, 20254, 30438, 73075, 69350, 76710, 59825, 13649, 86422, 34113, 86763,
  60397, 88488, 25988, 41923, 27559, 14078, 92992, 34588, 93534, 09244, 53221,
  41717, 33695, 29119, 97527, 22008, 78198, 64480, 09826, 54959, 94800, 93313,
  12415, 04931, 96665, 57371, 36282, 10213, 75181, 63740, 16417, 97078, 57772,
  11402, 12128, 18855, 90709, 42794, 52353, 19983, 46921, 20372, 05969, 25076,
  58813, 28178, 77109, 52990, 76073, 98393, 25471, 55878, 48489, 62910, 11632,
  83258, 33755, 29889, 67362, 71074, 30292, 85321, 90932, 55758, 35054, 19595,
  67433, 13292, 26343, 79053, 14082, 23273, 71621, 42560, 50538, 57971, 60323,
  23062, 94215, 96398, 61669, 94147, 80593, 63364, 07476, 41614, 08529, 93542,
  99972, 40028, 10576, 20534, 44608, 54289, 48285, 90926, 07869, 66191, 32528,
  03359, 00089, 25982, 68804, 72583, 83260, 28933, 27553, 18527, 03850, 16896,
  39470, 80358, 50608, 04866, 15817, 55542, 37385, 32549, 93732, 63910, 10939,
  40915, 06548, 36718, 83752, 73771, 79099, 30709, 91840, 04315, 48038, 67180,
  77569, 86704, 07144, 96039, 97462, 32615, 77639, 84870, 55018, 12805, 03500,
  32995, 58518, 83677, 71769, 10538, 03843, 38840, 57866, 22486, 82283, 85674,
  95905, 97750, 13350, 46889, 74001, 03231, 02594, 87092, 54588, 82882, 24410,
  64346, 19727, 21766, 29853, 06732, 41422, 35123, 79453, 13914, 76930, 82434,
  01022, 83703, 89073, 06477, 72473, 63613, 91555, 97394, 29627, 27430, 19270,
  81756, 80070, 76771, 23614, 80070, 55755, 67648, 92803, 28588, 06236, 62031,
  97179, 77888, 96057, 04408, 59526, 47413, 42779, 23349, 80070, 56799, 93746,
  58070, 80070, 21482, 08902, 09992, 85425, 16761, 68597, 19308, 17269, 66860,
  06410, 66540, 18565, 58994, 66949, 99108, 03308, 82424, 88673, 82886, 30123,
  92530, 11700, 78769, 72576, 99864, 10622, 44234, 14486, 84216, 52315, 59903,
  70240, 33680, 78753, 81103, 30101, 08711, 14819, 14433, 30527, 31189, 01120,
  19322, 49477, 98483, 51799, 34595, 26728, 22516, 37345, 30034, 09186, 93818,
  92406, 82939, 21198, 70601, 48607, 79694, 59864, 92810, 80070, 42326, 15352,
  21196, 47652, 80070, 16207, 01368, 83916, 65930, 99668, 52865, 48785, 38241,
  06976, 83213, 25932, 27236, 03688, 26987, 17877, 06601, 24992, 09877, 53801,
  70044, 46016, 37749, 22358, 32854, 77141, 10706, 29487, 58466, 84316, 62154,
  81223, 10019, 34369, 22859, 91514, 26924, 65319, 10016, 15029, 26424, 81687,
  41306, 04972, 30155, 74814, 73962, 95894, 15712, 68166, 68831, 11509, 93209,
  87655, 79433, 97501, 06840, 56942, 66029, 79340, 61446, 17758, 34679, 45093,
  74074, 75212, 01308, 53239, 50540, 68103, 80765, 65477, 86994, 64235, 00889,
  04544, 96478, 80729, 41568, 37022, 60493, 29334, 98805, 81156, 05558, 86740,
  73778, 39661, 04776, 89893, 86903, 57537, 04392, 56303, 16896, 04886, 75360,
  29360, 64839, 84714, 89903, 48646, 43238, 65754, 23076, 45245, 90086, 40273,
  79329, 62059, 07929, 80070, 44067, 99119, 80070, 78366, 60217, 83897, 98909,
  14462, 29786, 66618, 80070, 79705, 40429, 40575, 86931, 26226, 17003, 87439,
  41579, 01565, 98139, 47572, 75559, 81486, 37797, 15342, 37022, 27785, 31833,
  59429, 51169, 71109, 69560, 68148, 84316, 18765, 10310, 19750, 32952, 87529,
  84998, 77743, 37806, 61467, 22681, 11200, 22909, 74739, 02127, 40074, 59652,
  19417, 28371, 05508, 55854, 78296, 34280, 65150, 69823, 82704, 07115, 13465,
  49415, 95318, 40097, 27045, 96102, 17977, 08963, 34924, 54031, 24489, 73534,
  13892, 24086, 80070, 04275, 08802, 02953, 16050, 33858, 77889, 47182,
];

// const data = [2, 3, 2, 2, 5, 4, 6, 4, 3, 4];

uniqueArray = (dataArray) => {
  var count = 1;
  const repeatedNumbers = {};

  const uniqueArray = [...new Set(dataArray)];

  dataArray.filter((value, index) => {
    if (dataArray.indexOf(value) !== index) {
      if (!repeatedNumbers[`${value}`]) {
        repeatedNumbers[`${value}`] = count + 1;
      } else {
        repeatedNumbers[`${value}`] = repeatedNumbers[`${value}`] + 1;
      }
    }
  });

  console.log("array ", data);
  console.log("uniqueArray ", uniqueArray);
  console.log("repeatedNumbers ", repeatedNumbers);
};

uniqueArray(data);
