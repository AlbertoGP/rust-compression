//! rust-compression
//!
//! # Licensing
//! This Source Code is subject to the terms of the Mozilla Public License
//! version 2.0 (the "License"). You can obtain a copy of the License at
//! <http://mozilla.org/MPL/2.0/>.
#![cfg(feature = "gzip")]

pub mod encoder;
pub mod decoder;

#[cfg(test)]
mod tests {
    use action::Action;
    #[cfg(not(feature = "std"))]
    use alloc::vec::Vec;
    use gzip::decoder::GZipDecoder;
    use gzip::encoder::GZipEncoder;
    use rand::{Rng, SeedableRng, XorShiftRng};
    use traits::decoder::DecodeExt;
    use traits::encoder::EncodeExt;

    fn check(testarray: &[u8]) {
        let encoded = testarray
            .to_vec()
            .encode(&mut GZipEncoder::new(), Action::Finish)
            .collect::<Result<Vec<_>, _>>();
        let decoded = encoded
            .unwrap()
            .decode(&mut GZipDecoder::new())
            .collect::<Result<Vec<_>, _>>()
            .unwrap();

        assert_eq!(testarray.to_vec(), decoded);
    }

    #[test]
    fn test_empty() {
        check(&[]);
    }

    #[test]
    fn test_unit() {
        check(b"a");
    }

    #[test]
    fn test_arr() {
        check(b"aaaaaaaaaaa");
    }

    #[test]
    fn test_std() {
        check(b"aabbaabbaaabbbaaabbbaabbaabb");
    }

    #[test]
    fn test_long() {
        check(
            &(b"a".into_iter()
                .cycle()
                .take(260)
                .cloned()
                .collect::<Vec<u8>>()),
        );
    }

    #[test]
    fn test_multiblocks() {
        let mut rng = XorShiftRng::from_seed([
            189_522_394,
            1_694_417_663,
            1_363_148_323,
            4_087_496_301,
        ]);

        check(&(rng.gen_iter().take(323_742).collect::<Vec<_>>()));
    }

    #[test]
    fn test_multiblocks2() {
        let mut rng = XorShiftRng::from_seed([
            189_522_394,
            1_694_417_663,
            1_363_148_323,
            4_087_496_301,
        ]);

        check(&(rng.gen_iter().take(323_742).collect::<Vec<_>>()));
    }

    #[test]
    fn test_multiblocks3() {
        let mut rng = XorShiftRng::from_seed([
            189_522_394,
            1_694_417_663,
            1_363_148_323,
            4_087_496_301,
        ]);

        check(&(rng.gen_iter().take(0xF_FFFF).collect::<Vec<_>>()));
    }

    fn test_rand_with_len(len: usize) {
        let mut rng = XorShiftRng::from_seed([
            189_522_394,
            1_694_417_663,
            1_363_148_323,
            4_087_496_301,
        ]);

        check(&(rng.gen_iter().take(len).collect::<Vec<_>>()));
    }

    #[test]
    fn test_multiblocks6() {
        test_rand_with_len(6);
    }

    #[test]
    fn test_multiblocks4() {
        test_rand_with_len(0x10_000);
    }

    #[test]
    fn test_multiblocks5() {
        test_rand_with_len(0x10_0001);
    }
}
