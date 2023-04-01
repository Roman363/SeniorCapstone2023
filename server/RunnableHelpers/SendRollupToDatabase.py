
import os, sys

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

import RollupIngestion.rollupIngestion

RollupIngestion.rollupIngestion.startRollupReader()

