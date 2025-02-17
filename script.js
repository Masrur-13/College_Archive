// Sample course data
const courseCodes = {
  CSE: {
    1: ['CSE1101', 'CSE1102', 'EEE1103', 'CHE1104', 'MATH1105', 'SS1106'],
    2: ['CSE1201', 'CSE1202', 'PHY1203', 'MATH1204', 'ENG1205'],
    3: ['CSE2101', 'CSE2102', 'CSE2103', 'EEE2104', 'MATH2105', 'SS2106'],
    4: ['CSE2201', 'CSE2202', 'CSE2203', 'CSE2204', 'CSE2205'],
    5: ['CSE3101', 'CSE3102', 'CSE3103', 'CSE3104', 'MATH3105'],
    6: ['CSE3201', 'CSE3202', 'CSE3203', 'CSE3204', 'STAT3205'],
    7: ['CSE4101', 'CSE4102', 'SS4103'],
    8: ['ECO4201', 'CSE4202', 'SS4203'],
  },
  EEE: {
    1: ['EEE101', 'EEE102', 'EEE103', 'EEE104', 'EEE105', 'EEE106'],
    2: ['EEE201', 'EEE202', 'EEE203', 'EEE204', 'EEE205', 'EEE206'],
    3: ['EEE301', 'EEE302', 'EEE303', 'EEE304', 'EEE305', 'EEE306'],
    4: ['EEE401', 'EEE402', 'EEE403', 'EEE404', 'EEE405', 'EEE406'],
    5: ['EEE501', 'EEE502', 'EEE503', 'EEE504', 'EEE505', 'EEE506'],
    6: ['EEE601', 'EEE602', 'EEE603', 'EEE604', 'EEE605', 'EEE606'],
    7: ['EEE701', 'EEE702', 'EEE703', 'EEE704', 'EEE705', 'EEE706'],
    8: ['EEE801', 'EEE802', 'EEE803', 'EEE804', 'EEE805', 'EEE806'],
  },
  CE: {
    1: ['CE101', 'CE102', 'CE103', 'CE104', 'CE105', 'CE106'],
    2: ['CE201', 'CE202', 'CE203', 'CE204', 'CE205', 'CE206'],
    3: ['CE301', 'CE302', 'CE303', 'CE304', 'CE305', 'CE306'],
    4: ['CE401', 'CE402', 'CE403', 'CE404', 'CE405', 'CE406'],
    5: ['CE501', 'CE502', 'CE503', 'CE504', 'CE505', 'CE506'],
    6: ['CE601', 'CE602', 'CE603', 'CE604', 'CE605', 'CE606'],
    7: ['CE701', 'CE702', 'CE703', 'CE704', 'CE705', 'CE706'],
    8: ['CE801', 'CE802', 'CE803', 'CE804', 'CE805', 'CE806'],
  },
};

const driveLinks = {
  CSE: {
    1: {
      CSE1101: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1sTTEqXinl1mFsLRbA3osAgnqvoBEHZw6',
          FEC: 'https://drive.google.com/drive/u/1/folders/145Wdkbuq_tGQZ4jO8ZHd4vC3qpySJX1-',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1pVtRQS1T_HZNuAEDtzLMoeo5Ob3NQXu9',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1ZrRdlSWxgZbW6CLap78ftTNjB9nCqJ1s',
        ctQuestions: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1maRujwbKJ40wPbmIG8vEXNvQyZaUFqTI',
          FEC: 'https://drive.google.com/drive/u/1/folders/1XmWoo4lQv-4fafYOXcY0UdRmuOvJxocw',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1A-DfCnrnqyZoCIpqeu4VIKzlEoTuSaAN',
        },
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1gedwcXWXy507bVKFN9i6r3YDv-GDAgSg',
      },
      CSE1102: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1D8-u08Z8dT84cJzbxJT-5SLBkHYzwwaB',
          FEC: 'https://drive.google.com/drive/u/1/folders/1YmEboWzaHHtBXc-BeRX7EnT2j4ZU_nJH',
          NITER:
            'https://drive.google.com/drive/u/1/folders/19rB5KictnK91_hsNr-MqcAmw69qPmQ1E',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1sYfWsZOPsIMqlX9sgliG9e6yw2Z_QrFD',
        ctQuestions: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1XGrtTrHoJbvlvPTS09Hq5Eodni1bDHwC',
          FEC: 'https://drive.google.com/drive/u/1/folders/16OntC1gu8clWXFk8pXMsdG5-AEuIEOeT',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1YNg9sT_RAfvXRrrVeN7uEIeejkTtpCFW',
        },
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1FMy_j-tHqcphHUP4n_sqiw9aewtC9P2l',
      },
      EEE1103: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1XOloeZ7rxNQe35qrR4i48FtIZoSBUGzn',
          FEC: 'https://drive.google.com/drive/u/1/folders/1hnLBAskjTooPzLg00j5CKw15lUt81SI1',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1Pq6Y2ad9TVMAXoR-gpevnyM0DTF1l5k1',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1umdRuoPfvtbquBzTmNbukRFkmsXY08V-',
        ctQuestions: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1ZRLrUrK7ypus6ef6tJE49K48dhfmS-59',
          FEC: 'https://drive.google.com/drive/u/1/folders/1TpkbybUSm_bO92SgVTGiIFE2jb510RcN',
          NITER:
            'https://drive.google.com/drive/u/1/folders/15dA9QM6DezGbDygcyc6SbknH5FwXekPO',
        },
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1Wal1S1OX004R5oNuICvHCwGpwZHe7LDJ',
      },
      CHE1104: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1UIIbat_1PNass4Wx2j_owVYsZ_knVUh0',
          FEC: 'https://drive.google.com/drive/u/1/folders/1E_BUvFcWxnywitAk_OFe44IsDq5D0QZy',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1UxZhd0Bkl_UKy048Uff4AHhMQofp06dG',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1KizAYmo4RMr6PuqCyzFfNWrznfRXVrsu',
        ctQuestions: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1aIL6xurs_SU1p4flnAaRO713altQtydh',
          FEC: 'https://drive.google.com/drive/u/1/folders/1aCKuB34uzBabQVtSEykzwnWBGoB2PKeg',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1XiaFhNKpY01IHzoK1YBG-W6M0rZejKtA',
        },
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1agOSGZThXhAIiCAJBpQPj7G3Onk1EoaW',
      },
      MATH1105: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1my7w3t4-CpTRaKlTh2uzUep3mtgp-IO6',
          FEC: 'https://drive.google.com/drive/u/1/folders/1c4AXUNpjtrVyU-Fjvy_ptcjgP3TTZBgy',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1QDBC0PuDSjd3Vn8REEjtgltzZC-VCGuD',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Yi04a0_sMD8wWLiliKW3umQSywcC4Ykm',
        ctQuestions: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1znLg5uNdxQRuSafKPViGO724yj9C1pCA',
          FEC: 'https://drive.google.com/drive/u/1/folders/1RoeOdB3zMVoys-bN-z7Ls55uEyA_mql9',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1FJf1FMHB9BWiDAMnuqJq2Q8BTyFS6x5u',
        },
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1fJE_ydjsSf8CYOkMlcZ67jfxcJnHUQL7',
      },
      SS1106: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1czlXFvqtQXuUsW4oRznxbkNLJLGYvf8y',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KErNTCKPhbWRdbZWBM4TSxsa3UwLtRDB',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1PwELTMYrlwJnFHFPt4or9iO-9JiQqo9-',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/17wCGrde1Pxcyc__m1RJlTPRHK0i6bz7k',
        ctQuestions: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1FZu9qBw9c17DLA4nX_TlPoUCTPlhfA0j',
          FEC: 'https://drive.google.com/drive/u/1/folders/1qfIZjX9QrxIM2dY9s8glnyQbU1PmGv9z',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1-yMRJ0-rZswMcoXDe_vmvGCqFl8fI5pG',
        },
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1CwrWkmrND1l82GQiMEI0rDkIbMiBP0VJ',
      },
      // Add similar structure for other courses
    },
    2: {
      CSE1201: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      CSE1202: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      PHY1203: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      MATH1204: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      ENG1205: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
    3: {
      CSE2101: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/107IKDzBPGZ8aQLGChGDksmgWT1SahNhY',
          FEC: 'https://drive.google.com/drive/u/1/folders/1ENmLjwv3E28sNb1CdwrCz9Osa-a1DsI8',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1rR4Yppp5OduqhAC5ffTLeg1JoM1v0DcO',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1vfTcGqUsKGePaXFHm-eM0V-HoBsxcwmT',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1t2KjcVWZ-BBopn-_mG-xuqgg7OpQ_3N6',
      },
      CSE2102: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/15jn3t2eTBVJImmVOTFzEFMlldvDz4gEF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1eGdQTztFsZLlWczcubfTzVTe4kXciOKG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1M6wCqmQa-vFwZ1S0E3nYlqi7pvKOc5jH',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1WacOhRGUSubpTkul3y7_Z9Q2f6mBim5O',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1ohf86w3xbYWqSprqPJRFAABSHZvHs6HU',
      },
      CSE2103: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1ijWws3QMEbWuMEYmYZnkTuWtGyNbq-5N',
          FEC: 'https://drive.google.com/drive/u/1/folders/13Nb2-enTlqv2P4-JIBK0sFKvTHH6-jtP',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1bMN6FhkQ_nruq_IU4vOOEhhsEci3627U',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/18r-TYRE78QJoaf9m6dKJlq5yVJQ7kATe',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1poh5YAweKOSLzhYgJ99v0GdSq80j0Xy6',
      },
      EEE2104: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1O51QMMsF_0W2IV1PTm5LuxKfqmu_z74a',
          FEC: 'https://drive.google.com/drive/u/1/folders/10cLsyoha9XP8UOXz7PwXFYNO2VWfBb1s',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1KFgsb2HpbfvfDlVoEhNBjWDFYTpBlVYF',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1w1dSfCgcHG8fg58DY-xzY_Zb6nNpoMlD',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/187pnP5aTWBW-y0nJUjFNnm-4u7zZGov3',
      },
      MATH2105: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1t7H1TdI1VgLQ0ihyC5LpU-j6y022Nrdj',
          FEC: 'https://drive.google.com/drive/u/1/folders/1W98XomKK6OuzbYdDLYVKgChU3UvzLpM2',
          NITER:
            'https://drive.google.com/drive/u/1/folders/19bLeKSLiG2UqZMDgQ2HAobyBgd3uwTWS',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1tsanKKvSUO6Tx4d5hyYgMEfsN822Qb9B',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/176KQN2R7KIWHcMQACoSA40GB-3VJ35C7',
      },
      SS2106: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1uF4HKSoJnHnK-ciNjow7vASof-nqZlv9',
          FEC: 'https://drive.google.com/drive/u/1/folders/1uCMmv0-2K9IFAmIfWJ2CYHddy3KKQWk-',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1XlrL9X1l8lgr6XKFTk5k0eq-2kG6rMsC',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1f5B9pkZsCeL4BifNizjgc7v9_b1MRF4v',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1eoKe4qLMAolxN98acPMNXK6jumlEhWxP',
      },
    },
    4: {
      CSE2201: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/107IKDzBPGZ8aQLGChGDksmgWT1SahNhY',
          FEC: 'https://drive.google.com/drive/u/1/folders/1ENmLjwv3E28sNb1CdwrCz9Osa-a1DsI8',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1rR4Yppp5OduqhAC5ffTLeg1JoM1v0DcO',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1vfTcGqUsKGePaXFHm-eM0V-HoBsxcwmT',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1t2KjcVWZ-BBopn-_mG-xuqgg7OpQ_3N6',
      },
      CSE2202: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/15jn3t2eTBVJImmVOTFzEFMlldvDz4gEF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1eGdQTztFsZLlWczcubfTzVTe4kXciOKG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1M6wCqmQa-vFwZ1S0E3nYlqi7pvKOc5jH',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1WacOhRGUSubpTkul3y7_Z9Q2f6mBim5O',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1ohf86w3xbYWqSprqPJRFAABSHZvHs6HU',
      },
      CSE2203: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1ijWws3QMEbWuMEYmYZnkTuWtGyNbq-5N',
          FEC: 'https://drive.google.com/drive/u/1/folders/13Nb2-enTlqv2P4-JIBK0sFKvTHH6-jtP',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1bMN6FhkQ_nruq_IU4vOOEhhsEci3627U',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/18r-TYRE78QJoaf9m6dKJlq5yVJQ7kATe',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1poh5YAweKOSLzhYgJ99v0GdSq80j0Xy6',
      },
      CSE2204: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1O51QMMsF_0W2IV1PTm5LuxKfqmu_z74a',
          FEC: 'https://drive.google.com/drive/u/1/folders/10cLsyoha9XP8UOXz7PwXFYNO2VWfBb1s',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1KFgsb2HpbfvfDlVoEhNBjWDFYTpBlVYF',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1w1dSfCgcHG8fg58DY-xzY_Zb6nNpoMlD',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/187pnP5aTWBW-y0nJUjFNnm-4u7zZGov3',
      },
      CSE2205: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1t7H1TdI1VgLQ0ihyC5LpU-j6y022Nrdj',
          FEC: 'https://drive.google.com/drive/u/1/folders/1W98XomKK6OuzbYdDLYVKgChU3UvzLpM2',
          NITER:
            'https://drive.google.com/drive/u/1/folders/19bLeKSLiG2UqZMDgQ2HAobyBgd3uwTWS',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1tsanKKvSUO6Tx4d5hyYgMEfsN822Qb9B',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/176KQN2R7KIWHcMQACoSA40GB-3VJ35C7',
      },
    },
    // Add similar structure for other semesters
  },
  EEE: {
    1: {
      EEE101: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      EEE102: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      EEE103: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      EEE104: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      EEE105: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      EEE106: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
    2: {
      EEE201: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      EEE202: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      EEE203: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      EEE204: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      EEE205: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      EEE206: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
    3: {
      EEE301: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      EEE302: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      EEE303: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      EEE304: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      EEE305: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      EEE306: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
    4: {
      EEE401: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      EEE402: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      EEE403: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      EEE404: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      EEE405: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      EEE406: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
  },
  CE: {
    1: {
      CE101: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      CE102: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      CE103: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      CE104: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      CE105: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      CE106: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
    2: {
      CE201: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      CE202: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      CE203: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      CE204: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      CE205: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      CE206: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
    3: {
      CE301: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      CE302: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      CE303: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      CE304: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      CE305: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      CE306: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
    4: {
      CE401: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1EODHsQPvQDwA8vumdMZOGbTdwVw1B7mF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1cPFjLs8_WqzLenGPbY8i_fVn9NyZ14Fa',
          NITER:
            'https://drive.google.com/drive/u/1/folders/11OkVy33EtJp4xfsZz9KNf0JSKN62kv6b',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1Qm_PkmehJMaHZXG--VmQMfsy_5yOhEqV',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1HhRgAlOkCA34ocFt_H2Y4HGWTK7eNAPt',
      },
      CE402: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1nn2XgujKPpwVlTvEghphmkRncxk2b7OF',
          FEC: 'https://drive.google.com/drive/u/1/folders/1j5WL6xSxG7ZNGoYLq8hRdEwGBKW8JBni',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1yg2RzL0EaYVYuKr6jq-89ufysNdRbols',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1oNqrhpHDe4pKIrIPegpM44pZM1oYzRnK',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1BAkYuwO7oH9wESol5IKX-hdbz89WA5ng',
      },
      CE403: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1gMAer5d6E52TJhuXBepazVEOqjnxYAr5',
          FEC: 'https://drive.google.com/drive/u/1/folders/1HEQoE25UQSRAIFOjxaLakkiddv0ZIRkI',
          NITER:
            'https://drive.google.com/drive/u/1/folders/10wAJVMEQ0NkUJ-B8l63q9AB1poDxRFxp',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1u7UDWzxeCK062y13NpQTEAwa-6TRcax2',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/1wOX-Hm7SFCtHxw61qqbzRcNlv80TGFrX',
      },
      CE404: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1q0Al-CH7a0ncxmiZNPnbavS_ssmRc5qd',
          FEC: 'https://drive.google.com/drive/u/1/folders/1Jy7Zu-w9IXoyop2JYPA7dzJMjgMgMANc',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1985vbh29gDbzLFx36py-ff94OXkOZzu0',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1jMkk6syWLKQqgfMC20rwhTMn9CsQwoLh',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17MdfgZRs6Y3f6dqFw_I4y17cTgAoxSZB',
      },
      CE405: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
      CE406: {
        notes: {
          MEC: 'https://drive.google.com/drive/u/1/folders/1KDDfVEPiqs2VxJOxPQCxPNlbNVVo3a_K',
          FEC: 'https://drive.google.com/drive/u/1/folders/1KhUVmaqtOiuNcEA6ONtw7BnNjZ76ievG',
          NITER:
            'https://drive.google.com/drive/u/1/folders/1aVsAMeNSQfV_O1sjcquVwwJMPd2feGl_',
        },
        books:
          'https://drive.google.com/drive/u/1/folders/1TWGvKkaHrRZ08u2mQOSWUV3mt59XVs83',
        finalExam:
          'https://drive.google.com/drive/u/1/folders/17gRcTMZxbK2DJcqR0EXmS5QK99RLKKAj',
      },
    },
  },
  // Add similar structure for other departments
};

const departmentSelect = document.getElementById('department');
const semesterSelect = document.getElementById('semester');
const proceedButton = document.getElementById('proceed');
const courseContent = document.getElementById('courseContent');
const resourceContent = document.getElementById('resourceContent');
const courseList = document.getElementById('courseList');
const headerInfo = document.getElementById('headerInfo');
const courseHeader = document.getElementById('courseHeader');
const backButton = document.getElementById('backButton');

let currentDepartment = '';
let currentSemester = '';
let currentCourse = '';

proceedButton.addEventListener('click', showCourses);
backButton.addEventListener('click', () => {
  resourceContent.style.display = 'none';
  courseContent.style.display = 'block';
});

function showCourses() {
  const department = departmentSelect.value;
  const semester = semesterSelect.value;

  if (!department || !semester) {
    alert('Please select both department and semester');
    return;
  }

  currentDepartment = department;
  currentSemester = semester;

  const courses = courseCodes[department][semester];
  headerInfo.textContent = `${department} Department - ${semester}${getSemesterSuffix(
    semester
  )} Semester`;

  courseList.innerHTML = '';
  courses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.textContent = course;
    courseCard.addEventListener('click', () => showResources(course));
    courseList.appendChild(courseCard);
  });

  courseContent.style.display = 'block';
}

function showResources(courseCode) {
  currentCourse = courseCode;
  courseHeader.textContent = `Course: ${courseCode}`;
  courseContent.style.display = 'none';
  resourceContent.style.display = 'block';
}

function openDriveFolder(category, subcategory = null) {
  const courseData =
    driveLinks[currentDepartment]?.[currentSemester]?.[currentCourse];

  if (!courseData) {
    alert('No resources available for this course yet.');
    return;
  }

  let link;
  if (subcategory) {
    link = courseData[category]?.[subcategory];
  } else {
    link = courseData[category];
  }

  if (link) {
    window.open(link, '_blank');
  } else {
    alert('No resources available in this folder yet.');
  }
}

function getSemesterSuffix(semester) {
  const suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    4: 'th',
    5: 'th',
    6: 'th',
    7: 'th',
    8: 'th',
  };
  return suffixes[semester];
}

document.querySelectorAll('.resource-category a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const folder = e.target.getAttribute('data-folder');

    if (folder === 'books') {
      openDriveFolder('books');
    } else if (folder === 'final') {
      openDriveFolder('finalExam');
    } else {
      const category = e.target
        .closest('.resource-category')
        .querySelector('h3')
        .textContent.toLowerCase()
        .replace(' ', '');
      if (category === 'notes' || category === 'ctquestions') {
        openDriveFolder(category, folder);
      }
    }
  });
});
