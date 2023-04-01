import os, sys

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from RollupIngestion.rollupExtraction import *


RollupExtractor.setUp()
RollupExtractor.deleteExtractedRollup(unfiltered=True, filtered=True)

